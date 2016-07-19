/**
 * Error main module
 * @param  {Object} app  Express application
 * @return {none}
 */
module.exports = (app) => {

  /**
   * Catch 404 and forward to error handler
   */
  app.use((req, res, next) => {
    
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /**
   * Development error handler
   * Will print stacktrace
   */
  if(app.get('env') === 'development') {
    
    app.use((err, req, res, next) => {
      
      res.status(err.status || 500);
      
      res.render('error', {
        title: 'Error',
        message: err.message,
        error: err
      });
    });
  }

  /**
   * Production error handler
   * No stacktraces leaked to user
   */
  app.use((err, req, res, next) => {

    res.status(err.status || 500);
    
    res.render('error', {
      title: 'Error',
      message: err.message,
      error: {
        status: err.status,
        stack: ''
      }
    });
  });
};