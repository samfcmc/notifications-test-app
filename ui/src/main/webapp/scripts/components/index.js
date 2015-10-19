'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./messages')(context, 'Messages');
    require('./partials')(context, 'Partials');
    require('./main.jsx')(context, 'Main');
  };

}(module, require));
