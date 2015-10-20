'use strict';

(function(module) {

  module.exports = function(context) {
    //FIXME Replace this by a dynamic value!!
    var notifications = new context.libs.Notifications(context.config.notifications.url,
      context.user.username);

    var jQuery = context.libs.jQuery;

    context.createStore('MessagesStore', {
      initialize: function() {
        this.notifications = [];
        this.unread = 0;
        this.messages = [];
        this.bindActions(
          'ADD_MESSAGE', this.addMessage
        );
        notifications.getLastN(10, this.getFirstNotifications);
        var self = this;
        jQuery.ajax({
          url: '/api/messages',
          success: function(response) {
            self.messages = response;
            self.emit('change');
          }
        });
      },
      getFirstNotifications: function(list) {
        list.sort(function(left, right) {
          return right.timestamp - left.timestamp;
        });

        for(var i = 0; i < list.length; i++) {
          var item = list[i];
          if(!item.read) {
            this.unread++;
          }
        }
      },
      addMessage: function(payload) {
        var self = this;
        jQuery.ajax({
          url: '/api/messages',
          method: 'POST',
          data: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json'
          },
          success: function(response) {
            self.messages.push(response);
            self.emit('change');
          }
        });
      },
      getState: function() {
        return {
          notifications: this.notifications,
          unread: this.unread
        };
      }
    });
  }

}(module));
