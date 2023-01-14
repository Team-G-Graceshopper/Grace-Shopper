
import React from 'react';
import { useSelector } from 'react-redux';
import  StoreMessage  from "../storemessage/StoreMessage"
import Slideshow from "./Slideshow";



const Home = (props) => {
	const username = useSelector((state) => state.auth.me.username);

	return (
		<div style={{minHeight:"800px"}}>
			<h3>Welcome, {username}</h3>
			<Slideshow/>
			<StoreMessage />
		</div>
	);
};

export default Home;

