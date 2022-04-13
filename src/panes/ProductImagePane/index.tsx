import { useSelector } from "react-redux"
import { currentProduct } from "../../redux/selectors"
import { StyledProductImagePane } from "./style"

const ProductImagePane = () => {
	const product = useSelector(currentProduct)
	if (!product) return null

	const { prodImage } = product

	return <StyledProductImagePane bgUrl={prodImage}></StyledProductImagePane>
}

export default ProductImagePane
