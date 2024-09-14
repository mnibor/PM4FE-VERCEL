import { IProduct } from './product.interface'

export interface IOrder {
	id: number
	status: string
	date: Date
	userId: number
	products: IProduct[]
}
