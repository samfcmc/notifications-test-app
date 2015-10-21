'use strict';

(function(module) {

  module.exports = function(context, name) {
    require('./notification.jsx')(context, name);
    require('./list.jsx')(context, name);
    require('./alert.jsx')(context, name);
  }

}(module));
