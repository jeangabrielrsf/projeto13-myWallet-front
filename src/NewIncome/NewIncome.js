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
