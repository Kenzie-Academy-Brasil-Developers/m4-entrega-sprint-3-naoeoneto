class AppError extends Error {
    constructor(message, statusCode = 400) {
      super()
      this.message = { message }
      this.statusCode = statusCode
    }
  }
  
const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    if(err instanceof AppError) {
      return res.status(err.statusCode).json(err.message)
    }
    
    res.status(500).json({ message: 'Internal Server Error.' });
  };
  
export { AppError, errorHandler };