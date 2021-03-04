import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.less';
import Card from './Card';
import { usePostsData } from '../../hooks/usePostsData';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface IPostObj {
    kind: string; 
    data: {
        id: string;
        author: string;
        created_utc: number;
        num_comments: number;
        permalink: string;
        title: string;
        url: string;
        thumbnail: string; 
    }
}

export default function CardsList (){

    const token = useSelector<RootState>(state=>state.token);
    const [posts, setPosts] = useState<IPostObj[]>([]);
    const [loading, setLoading] = useState(false);//false т.к. изначально загрузки нет, нет токена
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState(''); //"курсор" для курсорной пагинации 
    const bottomOfList = useRef<HTMLDivElement>(null);
    
    const [count, setCount] = useState(0); //счетчик страниц
    

    async function load(){
        setLoading(true);
        setErrorLoading('');
        try{
            const {data: {data: {children, after}}} = await axios.get('https://oauth.reddit.com/rising/',{
            //const response = await axios.get('https://oauth.reddit.com/rising/',{
                headers: {Authorization: `bearer ${token}`},
                params: {
                    limit: 10,
                    after: nextAfter,
                }
            });
            //console.log('response:',children);
            
            setNextAfter(after);
            setPosts(prevChildren => prevChildren.concat(...children));
            setCount(prevCount=>prevCount+1);

        } catch (error){
            //console.error(error);
            setErrorLoading(String(error));
        }
        setLoading(false);
        console.log("count:",count);
    }


    //IntersectionObserver
    useEffect(()=>{

        //-----------------
        const observer = new IntersectionObserver((entries) => {

            if(count==0 || entries[0].isIntersecting && count % 3){
                load();
            } 
        },{
            rootMargin: '10px',
        })
        if(bottomOfList.current){
           observer.observe(bottomOfList.current) 
        }

        return () => {
            if(bottomOfList.current){
                observer.unobserve(bottomOfList.current)
            }
        }
    },[bottomOfList.current, nextAfter, token]);


    // const [posts] = usePostsData();
    // let items = posts.map((post:IPostObj)=>{
    //     return <Card data={post.data} key={post.data.id}/>
    // });

    // return (
    //     <ul className={styles.cardslist}>
    //         {items}
    //     </ul>
    // );
    return (
         <ul className={styles.cardslist}>

            {posts.length === 0 && !loading && !errorLoading && (
              <div style={{textAlign: 'center'}}>
                Нет ни одного поста
            </div>
            )}

             {posts.map((post:IPostObj) => {
               return <Card data={post.data} key={post.data.id}/> 
             })}

            <div ref={bottomOfList} />   

            {count!==0 && !(count % 3) && (
                <div style={{textAlign: 'center'}}>
                <button 
                    onClick={load}
                    style={{padding:'8px', border:'1px solid #666',background:'#CCC'}}>Загрузить ещё</button>
            </div>
            )}
            {loading && (count % 3) && (
                <div style={{textAlign: 'center'}}>
                Загрузка...
            </div>
            )}
            {errorLoading && (
                <div role="alert" style={{textAlign: 'center'}}>
                    {errorLoading}
                </div>
            )}
        </ul>
    )   

}