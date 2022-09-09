import styled from "styled-components";
const Form = styled.form`
	input,
	button {
		width: 90%;
		margin: 5px auto;
		border-radius: 5px;
	}

	input {
		height: 58px;
		font-weight: 400;
	}

	input::placeholder {
		color: #000000;
		font-size: 20px;
		line-height: 23.48px;
		font-weight: 400;
		font-style: normal;
		padding-left: 10px;
	}

	button {
		height: 46px;
		background-color: #a328d6;
		border: none;
		font-size: 20px;
		line-height: 23.48px;
		font-weight: 700;
		color: #ffffff;
	}

	button:hover {
		cursor: pointer;
		filter: brightness(120%);
	}

	& {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px 0px;
	}
`;

export default Form;
