//const express = require('express');
import express from 'express';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';
import {getUrl} from '../utils/settings/serverSettings';
import compression from 'compression';
import helmet from 'helmet'; //helmet рекомендуется для безопасной работы

const PORT = process.env.PORT || 3000;

const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if(!IS_DEV) {
	app.use(compression());
	app.use(helmet({
		contentSecurityPolicy: false, //чтобы реакт запускался
	}));
}

app.use('/static', express.static('./dist/client'));

app.get('/auth',(req, res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	
	axios.post(
		'https://www.reddit.com/api/v1/access_token',		
		`grant_type=authorization_code&code=${req.query.code}&redirect_uri=${getUrl()}/auth`,
		{
			auth: {username: String(process.env.CLIENT_ID), password: String(process.env.SECRET)},
			//auth: {username: "ULIpl3RaxojF1A", password: "E5U_3qVyoOX6ta942uH7lueZXiXtSQ"},
			headers: {'Content-type': 'application/x-www-form-urlencoded'}
		}							   
	)
	.then(({data})=>{
		res.send(
			indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
		);
	})
	.catch(console.log);
});

app.get('*',(req, res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.send(
		indexTemplate(ReactDOM.renderToString(App()))
	);
});

app.listen(PORT, ()=>{
	console.log("^^^",process.env.CLIENT_ID, process.env.SECRET);
	console.log(`Server started on`, getUrl());
});
