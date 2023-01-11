<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAsync } from '../cart/cartSlice';
import Pets from '../pets/Pets';

>>>>>>> da461ef0e09f5bef5dbe90616417bef5a84ae276
/**
 * COMPONENT
 */
const Home = (props) => {
	const username = useSelector((state) => state.auth.me.username);


	return (
		<Div>
			<h3>Welcome, {username}</h3>
			
		</Div>
	);
};

export default Home;

const Div = styled.div`
  text-align: center;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 3rem;
  justify-content: center;
  align-content: center;
  h1 {
    color: black;
  }
  h2 {
    border: 1px solid black;
    width: 300px;
    border-radius: 15px;
    align-self: center;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #000;
    }
    &:hover {
      background-color: #fff;
      color: #000;
      transition: 1000ms;
    }
  }
`;