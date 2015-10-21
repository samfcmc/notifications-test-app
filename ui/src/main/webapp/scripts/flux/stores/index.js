'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./messages')(context);
    require('./message')(context);
    require('./notifications')(context);
  };

}(module, require));
