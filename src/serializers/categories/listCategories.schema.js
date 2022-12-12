import * as yup from 'yup'
import { categoryReturnedShape } from './createCategory.schema'

const listCategoriesShape = yup.array(categoryReturnedShape)

export default listCategoriesShape