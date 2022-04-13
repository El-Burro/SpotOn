import { State } from "./reducer"

export const isMenuOpen = (state: State) => state.isMenuOpen
export const products = (state: State) => state.products
export const currentProduct = (state: State) => state.currentProduct
export const getCurrentProductFail = (state: State) => state.currentProductError
export const getProductsFail = (state: State) => state.productsError
