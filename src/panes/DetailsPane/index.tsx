import { StyledDetailsPane, StyledContainer } from "./style"
import Heading from "../../components/Heading"
import P from "../../components/P"
import Sub from "../../components/Sub"
import { HeadingEnum } from "../../enum/headings"
import { useSelector } from "react-redux"
import { currentProduct } from "../../redux/selectors"

const DetailsPane = () => {
	const product = useSelector(currentProduct)

	if (!product) return null

	const { productName, productSub, productDesc } = product

	return (
		<StyledDetailsPane>
			<StyledContainer>
				<Heading text={productName} as={HeadingEnum.H1} />
				<Sub>{productSub}</Sub>
				<P>{productDesc}</P>
			</StyledContainer>
		</StyledDetailsPane>
	)
}

export default DetailsPane
