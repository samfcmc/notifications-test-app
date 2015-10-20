'use strict';

(function(module) {

  module.exports = function(context, name) {
    require('./notification.jsx')(context, name);
    require('./list.jsx')(context, name);
  }

}(module));
