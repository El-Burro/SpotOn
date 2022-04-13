import { Product } from "./Product";

export type ProductSummary = Pick<Product, "productId"|"productName">