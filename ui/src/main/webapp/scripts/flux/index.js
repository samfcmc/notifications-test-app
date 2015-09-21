'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./stores')(context);
  };

}(module, require));
