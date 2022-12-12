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
import checkCategoryDoesntExistsMiddleware from "../middlewares/checkCategoryDoesntExists.middleware";
import checkCategoryExistsMiddleware from "../middlewares/checkCategoryExists.middleware";
import checkIfIdIsStringMiddleware from "../middlewares/checkIfIdIsString.middleware";
import checkIfProductExistsMiddleware from "../middlewares/checkIfProductExists.middleware";
import checkProductIdMiddleware from "../middlewares/checkProductId.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createCategoryShape } from "../serializers/createCategory.schema";
import { createProductShape } from "../serializers/createProduct.schema";

const userRouter = Router()

userRouter.get("/categories", listCategoriesController)
userRouter.post("/categories", checkCategoryExistsMiddleware, validateDataMiddleware(createCategoryShape), createCategoryController)
userRouter.get("/products", listProductsController)
userRouter.post("/products", validateDataMiddleware(createProductShape), createProductController)
userRouter.get("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, getInfoCategoryController)
userRouter.get("/products/:id", checkIfProductExistsMiddleware, getInfoProductController)
userRouter.patch("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, updateCategoryController)
userRouter.patch("/products/:id", checkIfProductExistsMiddleware, updateProductController)
userRouter.delete("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, deleteCategoryController)
userRouter.delete("/products/:id", checkIfProductExistsMiddleware, checkProductIdMiddleware, deleteProductController)
userRouter.get("/products/category/:id", checkCategoryDoesntExistsMiddleware, getProductAndCategoryController)

export default userRouter