//const express = require('express');
import express from 'express';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth',(req, res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	
	axios.post(
		'https://www.reddit.com/api/v1/access_token',		
		`grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://demo-redd-skillbox.herokuapp.com/auth`,
		{
			//auth: {username: process.env.CLIENT_ID, password: process.env.SECRET},
			auth: {username: "ULIpl3RaxojF1A", password: "E5U_3qVyoOX6ta942uH7lueZXiXtSQ"},
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
	console.log("^^^",process.env.CLIENT_ID, process.env.SECRET);
	res.header("Access-Control-Allow-Origin", "*");
	res.send(
		indexTemplate(ReactDOM.renderToString(App()))
	);
});

app.listen(PORT, ()=>{
	console.log(`Server started on https://demo-redd-skillbox.herokuapp.com:${PORT}`);
});
