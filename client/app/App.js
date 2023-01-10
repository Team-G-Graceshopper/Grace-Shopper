import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import '../main.css'

const App = () => {
	return (
		<div>
			<Navbar />
			<AppRoutes />
		</div>
	);
};

export default App;
