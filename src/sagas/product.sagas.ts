import { call, put, select, takeLatest } from "redux-saga/effects"
import { Actions, ActionType } from "../redux/actions/actionTypes"
import { Product } from "../types/Product"
import { Api } from "../api/apiCalls"

function* fetchProducts(): any {
	try {
		const result = yield call(Api.fetchProducts)
		const currentProduct: Product = yield select(state => state.currentProduct)

		if (!currentProduct) {
			yield call(fetchProduct, {
				type: ActionType.GET_CURRENT_PRODUCT,
				payload: result.data[0].productId
			})
		}

		yield put({ type: ActionType.SET_PRODUCTS, payload: result.data })
	} catch (e) {
		yield put({ type: ActionType.GET_PRODUCTS_FAIL, payload: true })
	}
}

function* fetchProduct(action: Extract<Actions, { payload: string }>): any {
	try {
		const payload = action.payload
		const result = yield call(Api.fetchProduct, payload)

		yield put({ type: ActionType.SET_CURRENT_PRODUCT, payload: result.data })
	} catch (e) {
		yield put({ type: ActionType.GET_CURRENT_PRODUCT_FAIL, payload: true })
	}
}

function* productSaga() {
	yield takeLatest(ActionType.GET_PRODUCTS, fetchProducts)
	yield takeLatest(ActionType.GET_CURRENT_PRODUCT, fetchProduct)
}

export default productSaga
