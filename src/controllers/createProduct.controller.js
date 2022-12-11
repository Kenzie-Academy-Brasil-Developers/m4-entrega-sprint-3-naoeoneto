import createProductService from "../services/createProduct.service"

const createProductController = async (req, res) => {
    const [status, data] = await createProductService(req.body)
    return res.status(status).json(data)
}

export default createProductController