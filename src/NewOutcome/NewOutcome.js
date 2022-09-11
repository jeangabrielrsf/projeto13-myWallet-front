import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserTokenContext from "../contexts/UserTokenContext";
import Form from "../GlobalStyles/Form";

export default function NewOutcome() {
	const { userToken } = useContext(UserTokenContext);
	const config = {
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
	};
	const transactionsURL = "http://localhost:5000/transactions";
	const navigate = useNavigate();

	const [outcomeData, setOutcomeData] = useState({
		value: "",
		description: "",
		type: "outcome",
	});

	function handleForm(e) {
		e.preventDefault();
		axios
			.post(transactionsURL, outcomeData, config)
			.then((result) => {
				console.log("Requisição OK!");
				console.log(result.data);
				navigate("/atividades");
			})
			.catch((error) => {
				console.log(error);
				alert(error.response.message);
			});
	}

	function handleDataForm(e) {
		setOutcomeData({
			...outcomeData,
			[e.target.name]: e.target.value,
		});
		console.log(outcomeData);
	}

	return (
		<>
			<Title>Nova saída</Title>

			<Form onSubmit={handleForm}>
				<input
					type="number"
					name="value"
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

				<button type="submit">Salvar saída</button>
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
