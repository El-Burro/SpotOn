import { Product } from "../../types/Product"
import { ProductSummary } from "../../types/ProductSummary"

export enum ActionType {
	TOGGLE_MENU = "Open|Close the menu",
	GET_PRODUCTS = "Get all products",
	GET_PRODUCTS_FAIL = "Failed to get all products",
	SET_PRODUCTS = "Set all products",
	GET_CURRENT_PRODUCT = "Get the selected product",
	GET_CURRENT_PRODUCT_FAIL = "Failed to get the selected product",
	SET_CURRENT_PRODUCT = "Set the selected product"
}

type ToggleMenuAction = {
	type: ActionType.TOGGLE_MENU
}

type GetProductsAction = {
	type: ActionType.GET_PRODUCTS
}

type GetProductsFailAction = {
	type: ActionType.GET_PRODUCTS_FAIL
	payload: boolean
}

type SetProductsAction = {
	type: ActionType.SET_PRODUCTS
	payload: ProductSummary[]
}

type GetCurrentProductAction = {
	type: ActionType.GET_CURRENT_PRODUCT
	payload: string
}

type GetCurrentProductFailAction = {
	type: ActionType.GET_CURRENT_PRODUCT_FAIL
	payload: boolean
}

type SetCurrentProductAction = {
	type: ActionType.SET_CURRENT_PRODUCT
	payload: Product
}

export type Actions =
	| ToggleMenuAction
	| GetProductsAction
	| GetProductsFailAction
	| SetProductsAction
	| GetCurrentProductAction
	| GetCurrentProductFailAction
	| SetCurrentProductAction