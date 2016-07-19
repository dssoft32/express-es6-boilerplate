/**
 * Listeners module
 * @param  {Object} debug Debug instance
 * @return {none}
 */
module.exports = (debug, server, port) => {

  return {
    
    /**
     * Event listener for HTTP server "error" event.
     */
    onError: (error) => {
      
      if(error.syscall !== 'listen') {
        throw error;
      }

      var 
        bind = typeof port === 'string'
          ? 'Pipe ' + port
          : 'Port ' + port;

      // Handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;

        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;

        default:
          throw error;
      }
    },
    
    /**
     * Event listener for HTTP server "listening" event.
     */
    onListening: () => {
      var 
        addr = server.address(),
        bind = typeof addr === 'string'
          ? 'pipe ' + addr
          : 'port ' + addr.port;
      
      debug('Listening on ' + bind);
    }
  };
};