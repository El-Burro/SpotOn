import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import productSaga from "../sagas/product.sagas"
import { reducer } from "./reducer"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(productSaga)

export default store
