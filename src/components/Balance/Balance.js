import styled from "styled-components";

export default function Balance({ userTransactions }) {
	let result = 0;
	const balance = userTransactions.map((transaction) => {
		if (transaction.type === "income") {
			result += parseFloat(transaction.value);
		} else {
			result -= parseFloat(transaction.value);
		}
	});

	return (
		<Wrapper result={result} size={userTransactions.length}>
			<h3>Saldo</h3>
			<p>{result.toFixed(2).toString().replace(".", ",")}</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	padding: 15px;
	display: ${(props) => (props.size === 0 ? "none" : "flex")};
	justify-content: space-between;
	font-size: 17px;
	line-height: 20px;
	h3 {
		color: black;
		font-weight: 700;
	}

	p {
		font-weight: 400;
		color: ${(props) => (props.result > 0 ? "#03AC00" : "#C70000")};
	}
`;
