'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./messages')(context, 'Messages');
    require('./partials')(context, 'Partials');
    require('./notifications')(context, 'Notifications');
    require('./main.jsx')(context, 'Main');
  };

}(module, require));
