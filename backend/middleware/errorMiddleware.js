// express by default gives us an error message text/html
// this middleware grabs just the error information we want and returns it in json

const errorHandler = (err, req, res, next) =>{
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NOD_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler,
}