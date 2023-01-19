import React from 'react';
import Footer from "../features/footer/Footer";
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

import '../main.css'




const App = () => {
	return (
		<div>
			<div className="upperBar">
				{/* <div className="searchBar"> search bar placeholder? </div> */}
				<p className="upperBarMessage">FREE Pet Delivery on orders over $1000!</p>
			</div>
			<div className="main_header">
				<h1>World of Pets</h1>
			</div>
			
			<Navbar />
			<AppRoutes />
			
			<Footer />
			
		</div>
	);
};

export default App;
