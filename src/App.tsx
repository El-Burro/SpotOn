import "./App.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "./components/Container"
import DetailsPane from "./panes/DetailsPane"
import EnvironmentPane from "./panes/EnvironmentPane"
import HeaderPane from "./panes/HeaderPane"
import LinkPane from "./panes/LinkPane"
import ProductImagePane from "./panes/ProductImagePane"
import { getProducts } from "./redux/actions/actions"
import { getCurrentProductFail, getProductsFail } from "./redux/selectors"
import { HeadingEnum } from "./enum/headings"
import ErrorMessage from "./components/ErrorMessage"
import Heading from "./components/Heading"
import Sub from "./components/Sub"

function App() {
	const dispatch = useDispatch()
	const productsFail = useSelector(getProductsFail)
	const productFail = useSelector(getCurrentProductFail)

	useEffect(() => {
		dispatch(getProducts())
	})

	return (
		<Container>
			<HeaderPane />
			{!(productFail || productsFail) ? (
				<>
					<DetailsPane />
					<EnvironmentPane />
					<ProductImagePane />
					<LinkPane />
				</>
			) : (
				<ErrorMessage>
					<Heading text="Oops... Something went wrong" as={HeadingEnum.H1} />
					<Sub>It seems we couldn't get the data you requested.</Sub>
				</ErrorMessage>
			)}
		</Container>
	)
}

export default App
