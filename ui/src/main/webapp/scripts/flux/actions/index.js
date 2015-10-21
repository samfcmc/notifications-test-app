'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./add_message')(context, 'ADD_MESSAGE');
    require('./get_message')(context, 'GET_MESSAGE');
    require('./read_notification')(context, 'READ_NOTIFICATION');
    require('./dismiss_alert')(context, 'DISMISS_ALERT');
    require('./close_message_sent')(context, 'CLOSE_MESSAGE_SENT');
  };

}(module, require));
