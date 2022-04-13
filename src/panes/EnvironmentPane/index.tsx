import { useSelector } from "react-redux"
import { currentProduct } from "../../redux/selectors"
import { StyledEnvironmentPane } from "./style"

const EnvironmentPane = () => {
	const product = useSelector(currentProduct)
	if (!product) return null

	const { envImage } = product

	return <StyledEnvironmentPane bgUrl={envImage}></StyledEnvironmentPane>
}

export default EnvironmentPane
