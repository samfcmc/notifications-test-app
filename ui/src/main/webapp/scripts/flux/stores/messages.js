'use strict';

(function(module) {

  module.exports = function(context) {
    //FIXME Replace this by a dynamic value!!
    var notifications = new context.libs.Notifications('http://localhost:8080',
      'admin');

    context.createStore('MessagesStore', {
      initialize: function() {
        this.list = [];
        this.bindActions(
          'TEST_ACTION', this.testAction
        );
        notifications.unread(function(response) {
          this.list = response;
        }.bind(this), function(error) {
          console.log(error);
        });
      },
      testAction: function(payload) {
        console.log('Test action');
      },
      getState: function() {
        return {
          list: this.list
        };
      }
    });
  }

}(module));
