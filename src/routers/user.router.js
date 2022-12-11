import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import createProductController from "../controllers/createProduct.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import getInfoCategoryController from "../controllers/getInfoCategory.controller";
import getInfoProductController from "../controllers/getInfoProduct.controller";
import getProductAndCategoryController from "../controllers/getProductAndCategory.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listProductsController from "../controllers/listProducts.controller";
import updateCategoryController from "../controllers/updateCategory.controller";
import updateProductController from "../controllers/updateProduct.controller";


const userRouter = Router()

userRouter.get("/categories", listCategoriesController)
userRouter.post("/categories", createCategoryController)
userRouter.get("/products", listProductsController)
userRouter.post("/products", createProductController)
userRouter.get("/categories/:id", getInfoCategoryController)
userRouter.get("/products/:id", getInfoProductController)
userRouter.patch("/categories/:id", updateCategoryController)
userRouter.patch("/products/:id", updateProductController)
userRouter.delete("/categories/:id", deleteCategoryController)
userRouter.delete("/products/:id", deleteProductController)
userRouter.get("/products/category/:id", getProductAndCategoryController)

export default userRouter