'use strict';

(function(module) {

  module.exports = function(context) {
    var jQuery = context.libs.jQuery;

    context.createStore('MessagesStore', {
      initialize: function() {
        this.messages = [];
        this.messageSent = false;
        this.bindActions(
          'ADD_MESSAGE', this.addMessage,
          'CLOSE_MESSAGE_SENT', this.closeMessageSent
        );
        var self = this;
        jQuery.ajax({
          url: '/api/messages',
          success: function(response) {
            self.messages = JSON.parse(response);
            self.emit('change');
          }
        });
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
            self.messageSent = true;
            self.emit('change');
          }
        });
      },
      closeMessageSent: function() {
        this.messageSent = false;
        this.emit('change');
      },
      getState: function() {
        return {
          messages: this.messages,
          messageSent: this.messageSent
        };
      }
    });
  }

}(module));
