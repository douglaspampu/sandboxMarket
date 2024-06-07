import { Product } from "./Product"

export type Catalog = {
    ingredients:Product[],
    stats:{
        totalPrice:number
    }
}