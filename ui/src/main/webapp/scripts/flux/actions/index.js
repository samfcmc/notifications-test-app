'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./add_message')(context, 'ADD_MESSAGE');
    require('./get_message')(context, 'GET_MESSAGE');
  };

}(module, require));
