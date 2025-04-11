const AppError = require('../utils/appError');

function handleCastErrorDb(error) {
  const message = `Invalid ${error.path}: ${error.value}`;
  return new AppError(message, 400);
}
function handleDuplicateFieldsDb(error) {
  const value = error.keyValue.name;
  const message = `Duplicate field value ${value}.Please try another value`;
  return new AppError(message, 400);
}
function handleValidationErrorDb(error) {
  return new AppError(error._message, 400);
}
function handleJWTError(error) {
  return new AppError(error.message, 401);
}

function handleJWTExpiredError(error) {
  return new AppError(error.message, 401);
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.kind === 'ObjectId') error = handleCastErrorDb(error);
    if (error.code === 11000) error = handleDuplicateFieldsDb(error);
    if (error._message?.match('validation'))
      error = handleValidationErrorDb(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError(error);
    if (error.name === 'TokenExpiredError')
      error = handleJWTExpiredError(error);
    sendErrorProd(error, res);
  }
};
