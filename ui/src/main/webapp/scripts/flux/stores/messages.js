'use strict';

(function(module) {

  module.exports = function(context) {
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
            self.messages = JSON.parse(response);
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
          this.notifications.push(item);
        }
        this.emit('change');
        notifications.poll(10, this.newNotifications);
      },
      newNotifications: function(response) {
        for(var i = 0; i < response.length; i++) {
          var item = response[i];
          this.notifications.push(item);
        }
        this.notifications.sort(function(left, right) {
          return right.timestamp - left.timestamp;
        });
        this.emit('change');
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
            self.messages.push(JSON.parse(response));
            self.emit('change');
          }
        });
      },
      getState: function() {
        return {
          notifications: this.notifications,
          unread: this.unread,
          messages: this.messages
        };
      }
    });
  }

}(module));
