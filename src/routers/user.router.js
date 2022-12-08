import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import createProductController from "../controllers/createProduct.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listProductsController from "../controllers/listProducts.controller";


const userRouter = Router()

userRouter.get("/", listCategoriesController)
userRouter.post("/", createCategoryController)
userRouter.get("/products", listProductsController)
userRouter.post("/products", createProductController)

export default userRouter