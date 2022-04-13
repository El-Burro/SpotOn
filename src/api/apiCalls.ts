import { HTTP } from "./httpCommon"

const route = "/products"

export const Api = {
	fetchProducts: () => HTTP.get(route),
	fetchProduct: (id: string) => HTTP.get(`${route}/${id}`)
}
