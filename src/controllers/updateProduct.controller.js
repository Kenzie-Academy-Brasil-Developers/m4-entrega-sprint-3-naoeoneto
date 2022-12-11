import { database } from "../database"
import updateProductService from "../services/updateProduct.service"

const updateProductController = async (req, res) => {
    const data = await updateProductService(req.body, req.params.id)
    return res.status(200).json(data)
}

export default updateProductController