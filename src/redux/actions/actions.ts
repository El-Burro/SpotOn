import { Product } from "../../types/Product"
import { ProductSummary } from "../../types/ProductSummary"
import { ActionType } from "./actionTypes"

export const toggleMenu = () => ({
	type: ActionType.TOGGLE_MENU
})

export const getProducts = () => ({
	type: ActionType.GET_PRODUCTS
})

export const getProductsFail = (payload: boolean) => ({
	type: ActionType.GET_PRODUCTS_FAIL,
	payload
})

export const setProducts = (payload: ProductSummary) => ({
	type: ActionType.GET_PRODUCTS,
	payload
})

export const getProduct = (payload: string) => ({
	type: ActionType.GET_CURRENT_PRODUCT,
	payload
})

export const getProductFail = (payload: boolean) => ({
	type: ActionType.GET_CURRENT_PRODUCT_FAIL,
	payload
})

export const setCurrentProduct = (payload: Product) => ({
	type: ActionType.SET_CURRENT_PRODUCT,
	payload
})
