import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import getInfoProductController from "../controllers/products/getInfoProduct.controller";
import getProductAndCategoryController from "../controllers/products/getProductAndCategory.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import checkCategoryDoesntExistsMiddleware from "../middlewares/checkCategoryDoesntExists.middleware";
import checkIfProductExistsMiddleware from "../middlewares/checkIfProductExists.middleware";
import checkProductIdMiddleware from "../middlewares/checkProductId.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createProductShape } from "../serializers/products/createProduct.schema";


const productRouter = Router()

productRouter.get("/products", listProductsController)
productRouter.post("/products", validateDataMiddleware(createProductShape), createProductController)
productRouter.get("/products/:id", checkIfProductExistsMiddleware, getInfoProductController)
productRouter.patch("/products/:id", checkIfProductExistsMiddleware, updateProductController)
productRouter.delete("/products/:id", checkIfProductExistsMiddleware, checkProductIdMiddleware, deleteProductController)
productRouter.get("/products/category/:id", checkCategoryDoesntExistsMiddleware, getProductAndCategoryController)

export default productRouter