import styled from "styled-components"

export const StyledHeaderPane = styled.header`
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 3rem;
	padding-bottom: 0;
	width: 100vw;
	z-index: 2;

	& svg {
		fill: white;
		cursor: pointer;
		transition: all 0.2s;
	}

	@media (min-width: 768px) {
		height: 12rem;
		width: 50vw;
		padding: 5rem;

		& svg {
			fill: black;

			&:hover.menu {
				fill: #405952;
				transform: scale(0.975);
			}
		}
	}
`

export const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	height: 7rem;
	width: 7rem;
`
