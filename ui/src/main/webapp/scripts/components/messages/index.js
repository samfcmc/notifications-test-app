'use strict';

(function(module) {

  module.exports = function(context, name) {
    require('./new-message.jsx')(context, name);
    require('./message.jsx')(context, name);
    require('./list-messages.jsx')(context, name);
  }

}(module));
