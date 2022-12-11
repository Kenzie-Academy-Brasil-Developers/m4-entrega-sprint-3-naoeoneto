const validateDataMiddleware = (schema) => async (req, res, next) => {
    try {
        const validated = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        req.validatedBody = validated
        return next()
        
    } catch (error) {
        return res.status(400).json({ message: error.errors })
    }
}

export default validateDataMiddleware