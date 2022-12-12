import deleteProductService from "../../services/products/deleteProduct.service"

const deleteProductController = async (req, res) => {
    const data = await deleteProductService(req.params.id)
    return res.status(204).json(data)
}

export default deleteProductController