import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "../GlobalStyles/Form";

export default function NewIncome() {
	return (
		<>
			<Title>Nova entrada</Title>

			<Form>
				<input type="number" name="valor" placeholder="Valor" required />
				<input
					type="text"
					name="description"
					placeholder="Descrição"
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
