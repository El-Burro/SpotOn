import { StyledMenuPane } from "./style"
import MenuItem from "../../components/MenuItem"
import { useSelector } from "react-redux"
import { products } from "../../redux/selectors"

type Props = {
	onClick: (e: React.MouseEvent<HTMLParagraphElement>) => void
}

const MenuPane = ({ onClick }: Props) => {
	const items = useSelector(products)

	return (
		<StyledMenuPane>
			{items!.map(({ productId, productName }) => (
				<MenuItem
					key={productId}
					id={productId}
					text={productName}
					onClick={onClick}
				/>
			))}
		</StyledMenuPane>
	)
}

export default MenuPane
