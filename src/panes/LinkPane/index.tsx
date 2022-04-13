import { HeadingEnum } from "../../enum/headings"
import { TextAlignEnum } from "../../enum/textAlign"
import Heading from "../../components/Heading"
import { StyledLinkPane, StyledWrapper } from "./style"
import LinkText from "../../components/LinkText"
import { useSelector } from "react-redux"
import { currentProduct } from "../../redux/selectors"

const LinkPane = () => {
	const product = useSelector(currentProduct)
	if (!product) return null

	const { linkBoxTitle, link, linkText, linkBgColor } = product

	return (
		<StyledLinkPane
			href={link}
			target="_blank"
			bgColor={linkBgColor}
			tabIndex={0}
			role="link"
		>
			<StyledWrapper>
				<Heading
					text={linkBoxTitle}
					as={HeadingEnum.H2}
					theme="light"
					textAlign={TextAlignEnum.RIGHT}
				/>
				<LinkText text={linkText} />
			</StyledWrapper>
		</StyledLinkPane>
	)
}

export default LinkPane
