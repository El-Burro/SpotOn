import styled from "styled-components"

const getFontSize = (type: string) => {
	switch (type) {
		case "h1":
			return 4.8
		case "h2":
			return 3.2
		case "h3":
			return 2.4
		case "h4":
			return 1.8
		case "h5":
			return 1.4
		default:
			return 1.2
	}
}

export const StyledHeading = styled.h1<{
	type: string
	theme: string
	textAlign?: string
}>`
	font-size: ${props => getFontSize(props.type)}rem;
	color: #${props => (props.theme === "dark" ? "404040" : "f6f6f6")};
	text-align: ${props => props.textAlign || "left"};
	margin-top: 0;
`
