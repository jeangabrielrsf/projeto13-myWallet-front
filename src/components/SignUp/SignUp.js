import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import EndFormButton from "../GlobalStyles/EndFormButton.js";
import Form from "../GlobalStyles/Form.js";
import Logo from "../GlobalStyles/Logo.js";

export default function SignUp() {
	const registerURL = "http://localhost:5000/sign-up";
	const [textSignUpButton, setTextSignUpButton] = useState("Cadastrar");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	function handleForm(e) {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			alert("As senhas digitadas não são correspondentes!");
			setFormData({
				...formData,
				password: "",
				confirmPassword: "",
			});
			return;
		}
		delete formData.confirmPassword;

		axios
			.post(registerURL, formData)
			.then((result) => {
				alert(
					"Usuário cadastrado com sucesso! Clique Ok para ir para a página de login."
				);
				navigate("/");
			})
			.catch((error) => {
				console.log(error.response);
				alert(error.response.data.message);
				setFormData({
					...formData,
					email: "",
					password: "",
					confirmPassword: "",
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
					type="text"
					value={formData.name}
					placeholder="Nome"
					name="name"
					onChange={handleDataForm}
					required
				/>

				<input
					type="email"
					value={formData.email}
					placeholder="E-mail"
					name="email"
					onChange={handleDataForm}
					required
				/>

				<input
					type="password"
					value={formData.password}
					placeholder="Senha"
					name="password"
					onChange={handleDataForm}
					required
				/>

				<input
					type="password"
					value={formData.confirmPassword}
					placeholder="Confirme a senha"
					name="confirmPassword"
					onChange={handleDataForm}
					required
				/>

				<button type="submit">
					<Button>{textSignUpButton}</Button>
				</button>
			</Form>

			<EndFormButton>
				<Link to="/">
					<p>Já tem uma conta? Entre agora!</p>
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
