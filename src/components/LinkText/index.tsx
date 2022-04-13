import ArrowRight from "../SVG/ArrowRight"
import { StyledLinkText, StyledText } from "./style"

type Props = {
	text: string
}

const LinkText = ({ text }: Props) => (
	<StyledLinkText>
		<ArrowRight />
		<StyledText>{text}</StyledText>
	</StyledLinkText>
)

export default LinkText
