import Bars from "../../components/SVG/Bars"
import Times from "../../components/SVG/Times"
import Logo from "../../components/SVG/Logo"
import MenuPane from "../MenuPane"
import { StyledHeaderPane, Menu } from "./style"
import { useDispatch, useSelector } from "react-redux"
import {
	getCurrentProductFail,
	getProductsFail,
	isMenuOpen
} from "../../redux/selectors"
import { getProduct, toggleMenu } from "../../redux/actions/actions"

const HeaderPane = () => {
	const dispatch = useDispatch()
	const menuOpen = useSelector(isMenuOpen)
	const productsFail = useSelector(getProductsFail)
	const productFail = useSelector(getCurrentProductFail)

	const toggle = () => dispatch(toggleMenu())

	const renderMenu = () => (
		<>
			<Times onClick={toggle} />
			<MenuPane
				onClick={e => {
					const { id } = e.target as HTMLParagraphElement
					dispatch(getProduct(id))
					toggle()
				}}
			/>
		</>
	)

	return (
		<StyledHeaderPane>
			<Logo />
			{!(productFail || productsFail) && (
				<Menu>{menuOpen ? renderMenu() : <Bars onClick={toggle} />}</Menu>
			)}
		</StyledHeaderPane>
	)
}

export default HeaderPane
