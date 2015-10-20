'use strict';

(function(module) {

  module.exports = function(context) {
    var jQuery = context.libs.jQuery;

    context.createStore('MessageStore', {
      initialize: function() {
        this.message = {from: {username: ''}, to: {username: ''}, text: '', timestamp: 0};
        this.bindActions(
          'GET_MESSAGE', this.getMessage
        );
      },
      getMessage: function(url) {
        var self = this;
        jQuery.ajax({
          url: url,
          success: function(response) {
            self.message = JSON.parse(response);
            self.emit('change');
          }
        });
      },
      getState: function() {
        return {
          message: this.message
        };
      }
    });
  }

}(module));
