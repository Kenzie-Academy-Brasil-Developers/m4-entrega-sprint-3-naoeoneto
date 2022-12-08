import * as yup from 'yup'
import { productReturnedShape } from './createProduct.schema'

const listProductsShape = yup.array(productReturnedShape)

export default listProductsShape