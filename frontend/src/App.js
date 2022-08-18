import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios';

import Users from './components/Users';
import { BeatLoader } from 'react-spinners';

// STYLES
import './App.css';
import styled from 'styled-components';

// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Lists from './components/Lists';

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		setLoading(true);
		const res = await axios.get('http://localhost:3000/api/user');
		// const res = await axios.get('https://jsonplaceholder.typicode.com/todos/');
		setUsers(res.data);
		setLoading(false);
	};

	const deleteUser = async (id) => {
		setLoading(true);

		try {
			await axios.delete(`http://localhost:3000/api/user/${id}`);
			setUsers(users.filter((user) => user._id !== id));
		} catch (error) {
			console.log(error.message);
		}
		setLoading(false);
	};

	// console.log(users);
	// console.log(loading);

	return (
		<Router>
			<Wrapper className="App">
				{loading ? <BeatLoader sizeunit={'px'} size={20} color={'#123abc'} loading={loading} /> : null}
				<Header />
			</Wrapper>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Lists" element={<Lists />} />
			</Routes>
		</Router>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
`;

export default App;
