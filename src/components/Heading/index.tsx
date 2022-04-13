import { HeadingEnum } from "../../enum/headings"
import { TextAlignEnum } from "../../enum/textAlign"
import { StyledHeading } from "./style"

type Props = {
	text: string
	as?: HeadingEnum
	theme?: "light" | "dark"
	textAlign?: TextAlignEnum
}

const Heading = ({
	text,
	as = HeadingEnum.H6,
	theme = "dark",
	textAlign = TextAlignEnum.LEFT
}: Props) => (
	<StyledHeading as={as} type={as} theme={theme} textAlign={textAlign}>
		{text}
	</StyledHeading>
)

export default Heading
