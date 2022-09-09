import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EndFormButton from "../GlobalStyles/EndFormButton";
import Form from "../GlobalStyles/Form";
import Logo from "../GlobalStyles/Logo";

export default function SignUp() {
	const registerURL = "localhost:5000/sign-up";
	const [textSignUpButton, setTextSignUpButton] = useState("Cadastrar");

	return (
		<>
			<Logo />

			<Form>
				<input type="text" placeholder="Nome" name="nome" required />

				<input type="email" placeholder="E-mail" name="email" required />

				<input type="password" placeholder="Senha" name="password" required />

				<input
					type="password"
					placeholder="Confirme a senha"
					name="password"
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
