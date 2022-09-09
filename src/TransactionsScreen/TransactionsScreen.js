import styled from "styled-components";

export default function TransactionsScreen() {
	return (
		<>
			<Title>
				<h2>Olá, Fulano</h2>
			</Title>

			<Registers>Não há registros de entrada ou saída</Registers>

			<Buttons>
				<InOutButton></InOutButton>

				<InOutButton></InOutButton>
			</Buttons>
		</>
	);
}

const Title = styled.div`
	font-size: 26px;
	font-weight: 700;
	line-height: 30.52px;
	color: #ffffff;
`;

const Registers = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	width: 90%;
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
	margin: 6px 15px;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
