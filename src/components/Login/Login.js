import { useContext, useState } from "react";
import Logo from "../GlobalStyles/Logo.js";
import axios from "axios";
import styled from "styled-components";
import Form from "../GlobalStyles/Form.js";
import EndFormButton from "../GlobalStyles/EndFormButton.js";
import { Link, useNavigate } from "react-router-dom";
import UserTokenContext from "../../contexts/UserTokenContext.js";
import UserNameContext from "../../contexts/UserNameContext.js";

export default function Login() {
	const loginURL = "http://localhost:5000/login";
	const { setUserToken } = useContext(UserTokenContext);
	const { setUserName } = useContext(UserNameContext);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [textButton, setTextButton] = useState("Entrar");
	const navigate = useNavigate();

	function handleForm(e) {
		e.preventDefault();
		axios
			.post(loginURL, formData)
			.then((result) => {
				setUserToken(result.data.token);
				setUserName(result.data.name);
				navigate("/atividades");
			})
			.catch((error) => {
				alert(error.response.data.message);
				setFormData({
					email: "",
					password: "",
				});
			});
	}

	function handleDataForm(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<>
			<Logo />
			<Form onSubmit={handleForm}>
				<input
					type="email"
					placeholder="E-mail"
					name="email"
					value={formData.email}
					onChange={handleDataForm}
					required
				/>

				<input
					type="password"
					placeholder="Senha"
					name="password"
					value={formData.password}
					onChange={handleDataForm}
					required
				/>

				<button type="submit">
					<Button>{textButton}</Button>
				</button>
			</Form>

			<EndFormButton>
				<Link to="/cadastro">
					<p>Primeira vez? Cadastra-se!</p>
				</Link>
			</EndFormButton>
		</>
	);
}

const Button = styled.div`
	width: auto;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
