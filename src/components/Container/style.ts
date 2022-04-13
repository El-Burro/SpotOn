import styled from "styled-components"

export const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-template-areas:
		"environment environment"
		"product link"
		"details details";

	height: 100vh;

	@media (min-width: 768px) {
		grid-template-columns: 50vw repeat(2, 1fr);
		grid-template-rows: 12rem 1fr 25vw;
		grid-template-areas:
			"header environment environment"
			"details environment environment"
			"details product link";
	}
`
