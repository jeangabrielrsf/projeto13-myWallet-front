import { useState } from "react";
import Logo from "../GlobalStyles/Logo";
import axios from "axios";
import styled from "styled-components";
import Form from "../GlobalStyles/Form";
import EndFormButton from "../GlobalStyles/EndFormButton";
import { Link } from "react-router-dom";

export default function Login() {
	const loginURL = "localhost:5000/login";
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [textButton, setTextButton] = useState("Entrar");

	return (
		<>
			<Logo />
			<Form>
				<input type="email" placeholder="E-mail" name="email" required />

				<input type="password" placeholder="Senha" name="password" required />

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
