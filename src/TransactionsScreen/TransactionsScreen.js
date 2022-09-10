import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserNameContext from "../contexts/UserNameContext";
import UserTokenContext from "../contexts/UserTokenContext";

export default function TransactionsScreen() {
	const { userToken } = useContext(UserTokenContext);
	const transactionsURL = "http://localhost:5000/transactions";

	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
	};
	const { userName } = useContext(UserNameContext);

	useEffect(() => {
		axios
			.get(transactionsURL, config)
			.then((result) => {
				console.log(result.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<Container>
			<Title userName={userName}>
				{userName.length > 1 ? <h2>Olá, {userName}</h2> : <h2>Olá, pessoa</h2>}
				<LogoutButton>
					<ion-icon name="log-out-outline"></ion-icon>
				</LogoutButton>
			</Title>

			<Registers>Não há registros de entrada ou saída</Registers>

			<Buttons>
				<Link to="/nova-entrada">
					<InOutButton>
						<ion-icon name="add-circle-outline"></ion-icon>
						Nova Entrada
					</InOutButton>
				</Link>

				<Link to="/nova-saida">
					<InOutButton>
						<ion-icon name="remove-circle-outline"></ion-icon>
						Nova Saída
					</InOutButton>
				</Link>
			</Buttons>
		</Container>
	);
}

// UI
const Container = styled.div`
	margin: 0px 20px;
`;

const Title = styled.div`
	font-size: 26px;
	font-weight: 700;
	line-height: 30.52px;
	color: #ffffff;
	margin: 20px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoutButton = styled.div`
	font-size: 30px;
`;

const Registers = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	width: 100%;
	height: 446px;
	margin: 10px auto;
	color: #868686;
	font-weight: 400;
	font-size: 20px;
	line-height: 23.48px;
	word-wrap: break-word;
	border-radius: 5px;
`;

const InOutButton = styled.div`
	width: 155px;
	height: 114px;
	background-color: #a328d6;
	border-radius: 5px;
	margin-top: 6px;
	color: #ffffff;
	font-size: 17px;
	font-weight: 700;
	line-height: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-decoration: none !important;
	text-decoration-color: none;

	ion-icon {
		font-size: 30px;
	}

	&:hover {
		filter: brightness(130%);
		cursor: pointer;
		text-decoration: none !important;
		text-decoration-color: none;
	}
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
