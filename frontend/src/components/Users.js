import React from 'react';

// STYLES 
import styled from 'styled-components'

const Users = ({ users, deleteUser }) => {
	return (
		<UserContainer>
			{users.map((user, index) => (
				<UserContainer key={index}>
					<h1>{user.name}</h1>
					<p>{user.email}</p>
					<p>{user.age}</p>

					<button onClick={() => deleteUser(user._id)}>Delete</button>
				</UserContainer>
			))}
		</UserContainer>
	);
};

export default Users;


const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
`;
