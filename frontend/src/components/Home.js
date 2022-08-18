import React from 'react';

import styled from 'styled-components';

const Home = () => {
	return (
		<Form>
			<h1>Form</h1>
			<input type="text" placeholder="Name" />
			<input type="text" placeholder="Email" />
			<input type="text" placeholder="Age" />
			<button>Submit</button>
		</Form>
	);
};

export default Home;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
`;
