import styled from "styled-components"

export const StyledDetailsPane = styled.main`
	grid-area: details;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const StyledContainer = styled.div`
	margin: 3rem;
	
	@media (min-width: 768px) {
		margin: 5rem;
	}
`
