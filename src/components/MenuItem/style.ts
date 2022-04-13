import styled from "styled-components"

export const StyledMenuItem = styled.p<{ isSelected: boolean }>`
	cursor: pointer;
	color: ${props => props.isSelected && "#803727"};
	width: 100%;
	margin: 0;
	padding: 3rem;
	font-size: 3rem;
	font-weight: 600;
	text-align: center;
	text-transform: uppercase;

	&:hover {
		background: #373f5f17;
	}
`
