import React from 'react';

import styled from 'styled-components';

const Lists = () => {
	return (
		<ListContainer>
			<h1>Lists</h1>
		</ListContainer>
	);
};

export default Lists;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
`;
