import { Actions, ActionType } from "./actions/actionTypes"
import { Product } from "../types/Product"
import { ProductSummary } from "../types/ProductSummary"

export type State = {
	isMenuOpen: boolean
	products: ProductSummary[] | null
	productsError: boolean
	currentProduct: Product | null
	currentProductError: boolean
}

const initState: State = {
	isMenuOpen: false,
	products: null,
	currentProduct: null,
	productsError: false,
	currentProductError: false
}

export const reducer = (state = initState, action: Actions) => {
	switch (action.type) {
		case ActionType.TOGGLE_MENU:
			return {
				...state,
				isMenuOpen: !state.isMenuOpen
			}
		case ActionType.SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				productsError: false
			}
		case ActionType.GET_PRODUCTS_FAIL:
			return {
				...state,
				productsError: action.payload
			}
		case ActionType.SET_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload,
				currentProductError: false
			}
		case ActionType.GET_CURRENT_PRODUCT_FAIL:
			return {
				...state,
				currentProductError: action.payload
			}
		default:
			return state
	}
}
