import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserTokenContext from "../../contexts/UserTokenContext.js";
import Form from "../GlobalStyles/Form";

export default function NewIncome() {
	const { userToken } = useContext(UserTokenContext);
	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
	};

	const transactionsURL = "http://localhost:5000/transactions";
	const navigate = useNavigate();
	const [incomeData, setIncomeData] = useState({
		value: "",
		description: "",
		type: "income",
	});
	function handleForm(e) {
		e.preventDefault();
		axios
			.post(transactionsURL, incomeData, config)
			.then((result) => {
				console.log("Requisição OK!");
				navigate("/atividades");
			})
			.catch((error) => {
				console.log(error);
				alert(`${error.response.statusText}. Voltando para a tela de login`);
				navigate("/");
			});
	}

	function handleDataForm(e) {
		setIncomeData({
			...incomeData,
			[e.target.name]: e.target.value,
		});
	}
	return (
		<>
			<Title>Nova entrada</Title>

			<Form onSubmit={handleForm}>
				<input
					type="number"
					name="value"
					step="0.01"
					placeholder="Valor"
					onChange={handleDataForm}
					required
				/>
				<input
					type="text"
					name="description"
					placeholder="Descrição"
					onChange={handleDataForm}
					required
				/>

				<button type="submit">Salvar entrada</button>
			</Form>
			<BackButton>
				<Link to="/atividades">
					<p>Voltar</p>
				</Link>
			</BackButton>
		</>
	);
}

const Title = styled.div`
	font-size: 26px;
	font-weight: 700;
	line-height: 30.52px;
	color: #ffffff;
	margin: 20px 18.75px;
`;

const BackButton = styled.div`
	& {
		width: 90%;
		margin: 0px auto;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 46px;
		border: none;
	}

	p {
		font-size: 20px;
		line-height: 23.48px;
		font-weight: 700;
		color: #ffffff;
	}
`;
