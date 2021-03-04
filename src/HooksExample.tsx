import React from 'react';

export function MyHooks({title, id}: {title: string, id?:string}) {

    //MEMO:
    const items = 100;
    const multiplier = 3;
    const result = React.useMemo(
        ()=>calculate(items, multiplier),
        [items, multiplier]
    );
    // /memo

    React.useEffect(()=>{
        console.log('1)componentDidMount');
        console.log('1)componentWillUpdate');
    });
    
    React.useEffect(()=>{
        console.log('2)componentDidMount');
        return ()=>{
            console.log('2)componentWillUnmount');
        }
    },[]);

    React.useEffect(()=>{
        console.log('3)componentWillRecieveProps', title);
    },[title]);
    
//-------------------
    const [isMounted] = useIsMounted();

    React.useEffect(()=> {
        console.log('isMounted:',isMounted);
    },[isMounted]);

    return (
        <div>{title} {id} ({result})</div>
    )
}


export function useIsMounted () {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(()=>{
        setIsMounted(true)
    },[]);
    return [isMounted]
}

 //for Memo
 function calculate(items: number, multiplier: number) {
     return new Array(items).fill(1).reduce((a, v) => a * multiplier);
 };
