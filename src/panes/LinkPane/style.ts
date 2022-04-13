import styled from "styled-components"

export const StyledLinkPane = styled.a<{ bgColor: string }>`
	grid-area: link;
	background: ${props => props.bgColor};
	text-decoration: none;
	color: white;
	margin: 0;
	transition: all .5s ease-in-out;

	&:hover {
		margin: .25rem;
	}

	& * {
		pointer-events: none;
	}
`

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;
	padding: 3rem;

	@media (min-width: 768px) {
		padding: 5rem;
	}
`
