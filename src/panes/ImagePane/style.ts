import styled from "styled-components"

export const StyledImagePane = styled.figure<{ bgUrl?: string }>`
	background: url(${props => props.bgUrl}) no-repeat;
	background-size: cover;
	background-position: 50% 0%;
	overflow: hidden;
	margin: 0;
	transition: margin 0.5s ease-in-out, filter 0.75s ease-in,
		background-image 0.4s ease-out;
	filter: grayscale(30%);

	&:hover {
		margin: 0.25rem;
		filter: grayscale(0%);
	}

	& * {
		pointer-events: none;
	}
`
