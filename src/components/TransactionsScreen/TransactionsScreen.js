import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Balance from "../Balance/Balance";
import UserNameContext from "../../contexts/UserNameContext.js";
import UserTokenContext from "../../contexts/UserTokenContext.js";
import UserTransaction from "../UserTransaction/UserTransaction.js";

export default function TransactionsScreen() {
	const { userToken } = useContext(UserTokenContext);
	const transactionsURL = "http://localhost:5000/transactions";
	const signOutURL = "http://localhost:5000/sign-out";
	const [userTransactions, setUserTransactions] = useState([]);
	const navigate = useNavigate();

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
				setUserTransactions(result.data);
			})
			.catch((error) => {
				console.log(error.response);
				if (error.response.status) {
					alert(`${error.response.statusText}. Voltando para a tela inicial.`);
					navigate("/");
				}
			});
	}, []);

	function signOutUser() {
		const answer = window.confirm("Tem certeza que deseja sair?");
		if (answer) {
			axios
				.delete(signOutURL, config)
				.then((result) => {
					navigate("/");
				})
				.catch((error) => {
					console.log(error.response);
				});
		}
	}

	return (
		<Container>
			<Title userName={userName}>
				{userName.length > 1 ? <h2>Olá, {userName}</h2> : <h2>Olá, pessoa</h2>}
				<LogoutButton onClick={() => signOutUser()}>
					<ion-icon name="log-out-outline"></ion-icon>
				</LogoutButton>
			</Title>

			<Registers>
				<Transactions>
					{userTransactions.length === 0 ? (
						<h4>Não há registros de entrada ou saída</h4>
					) : (
						userTransactions.map((transaction, index) => {
							return <UserTransaction key={index} transaction={transaction} />;
						})
					)}
				</Transactions>
				<Balance userTransactions={userTransactions} />
			</Registers>

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
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	width: 100%;
	height: 446px;
	margin: 10px auto;
	border-radius: 5px;
`;

const Transactions = styled.div`
	width: 100%;
	overflow-y: auto;
	h4 {
		color: #868686;
		font-weight: 400;
		font-size: 20px;
		line-height: 23.48px;
		word-wrap: break-word;
	}
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
