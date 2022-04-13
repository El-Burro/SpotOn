import { useSelector } from "react-redux"
import { currentProduct } from "../../redux/selectors"
import { StyledMenuItem } from "./style"

type Props = {
	id: string
	text: string
	onClick: (e: React.MouseEvent<HTMLParagraphElement>) => void
}

const MenuItem = ({ id, text, onClick }: Props) => {
	const selectedItem = useSelector(currentProduct)

	return (
		<StyledMenuItem
			id={id}
			onClick={onClick}
			isSelected={id === selectedItem?.productId}
		>
			{text}
		</StyledMenuItem>
	)
}

export default MenuItem
