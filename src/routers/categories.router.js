import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import getInfoCategoryController from "../controllers/categories/getInfoCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";
import checkCategoryDoesntExistsMiddleware from "../middlewares/checkCategoryDoesntExists.middleware";
import checkCategoryExistsMiddleware from "../middlewares/checkCategoryExists.middleware";
import checkIfIdIsStringMiddleware from "../middlewares/checkIfIdIsString.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createCategoryShape } from "../serializers/categories/createCategory.schema";

const categoryRouter = Router()

categoryRouter.get("/categories", listCategoriesController)
categoryRouter.post("/categories", checkCategoryExistsMiddleware, validateDataMiddleware(createCategoryShape), createCategoryController)
categoryRouter.get("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, getInfoCategoryController)
categoryRouter.patch("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, updateCategoryController)
categoryRouter.delete("/categories/:id", checkCategoryDoesntExistsMiddleware, checkIfIdIsStringMiddleware, deleteCategoryController)

export default categoryRouter