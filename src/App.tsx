import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout';
import './main.global.css';
import Header from './shared/Header';
import Content from './shared/Content';
import CardsList from './shared/CardsList';
//import {useToken} from './hooks/useToken';

//import { userContext } from './shared/context/userContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { rootReducer, setToken } from './store';
import thunk from 'redux-thunk';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Post from './shared/Post';
//import { nanoid } from 'nanoid';
import { StoreContext } from 'storeon/react';
import sstore from './storeon/store';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function NoMatch(){
    return (
        <div>
            <h1>
            404 — страница не найдена
            </h1>
        </div>
    )
}

function AppComponent(){
    
    const [mounted, setMounted] = useState(false);

    // useEffect(()=>{
    //     const token = localStorage.getItem('token') || window.__token__;
    //    // dispatchEvent(setToken(token));
    //     if(token){
    //         localStorage.setItem('token',token);
    //     }
    // },[])
    
    useEffect(()=>{
        setMounted(true);
    },[])

    return (
        <Provider store={store}>
            <UserContextProvider >
                <PostsContextProvider>
                    <StoreContext.Provider value={sstore}>
                        {mounted && (
                            <BrowserRouter>
                                <Layout>
                                    <Header />
                                    <Content>
                                        <CardsList />
                                        <Switch>
                                            <Redirect exact from="/" to="/posts" />
                                            <Redirect from="/auth" to="/posts" />
                                            <Route path="/posts">
                                                
                                                <Route path="/posts/:id">
                                                    <Post />
                                                </Route>
                                            </Route>
                                            <Route path="*">
                                                <h1 style={{ textAlign: 'center' }}>
                                                    404 - страница не найдена
                                                </h1>
                                            </Route>
                                        </Switch>
                                    </Content>
                                </Layout>
                            </BrowserRouter> 
                        )}
                    </StoreContext.Provider>
                </PostsContextProvider>
            </UserContextProvider >
        </Provider>
    );
}

export const App = hot(()=><AppComponent/>);