import styled from "styled-components";

export default function Logo() {
	return (
		<Wrapper>
			<h2>MyWallet</h2>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	font-family: "Saira Stencil One", cursive;
	font-weight: 400;
	font-size: 32px;
	line-height: 50.37px;
	color: #ffffff;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;
