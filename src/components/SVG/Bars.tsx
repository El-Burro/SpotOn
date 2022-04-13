type Props = {
	onClick?: () => void
}

const Bars = ({ onClick }: Props) => (
	<svg
		className="menu"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		height="100%"
		onClick={onClick}
	>
		<path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" />
	</svg>
)

export default Bars
