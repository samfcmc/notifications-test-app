'use strict';

(function(module) {

  module.exports = function(context) {
    var notifications = new context.libs.Notifications(context.config.notifications.url,
      context.user.username);

    var jQuery = context.libs.jQuery;

    context.createStore('NotificationsStore', {
      initialize: function() {
        this.notifications = [];
        this.unread = 0;
        this.alertVisible = false;
        this.bindActions(
          'READ_NOTIFICATION', this.readNotification,
          'DISMISS_ALERT', this.dismissAlert
        );
        notifications.getLastN(10, this.getFirstNotifications);
      },
      getState: function() {
        return {
          notifications: this.notifications,
          unread: this.unread,
          alertVisible: this.alertVisible
        }
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
          if(!item.read) {
            this.unread++;
          }
        }
        this.notifications.sort(function(left, right) {
          return right.timestamp - left.timestamp;
        });
        if(response.length > 0) {
          this.alertVisible = true;
        }
        this.emit('change');
      },
      readNotification: function(notification) {
        var self = this;
        notifications.read(notification.id, function(response) {
          notification.read = true;
          self.unread--;
          self.emit('change');
        });
      },
      dismissAlert: function() {
        this.alertVisible = false;
        this.emit('change');
      }
    });
  }

}(module));
