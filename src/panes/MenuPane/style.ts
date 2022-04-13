import styled from "styled-components"

export const StyledMenuPane = styled.nav`
	background: #ffffff;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	top: 12rem;
	bottom: 0;
	left: 0;
	width: 100vw;

	@media (min-width: 768px) {
		width: 50vw;
	}
`
