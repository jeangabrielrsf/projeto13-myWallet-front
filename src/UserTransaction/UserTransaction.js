import styled from "styled-components";

export default function UserTransaction({ transaction }) {
	return (
		<Wrapper>
			<TransactionDateDesc>
				<p>{transaction.date}</p>
				<p>{transaction.description}</p>
			</TransactionDateDesc>

			<TransactionValue type={transaction.type}>
				{parseFloat(transaction.value).toFixed(2).toString().replace(".", ",")}
			</TransactionValue>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 400;
	line-height: 18.78px;
	width: 100%;
	padding: 15px;
`;

const TransactionDateDesc = styled.div`
	display: flex;
	align-items: center;

	p:nth-child(1) {
		color: #c6c6c6;
		margin-right: 9px;
	}

	p:nth-child(2) {
		color: #000000;
	}
`;

const TransactionValue = styled.div`
	color: ${(props) => (props.type === "income" ? "#03AC00" : "#C70000")};
`;
