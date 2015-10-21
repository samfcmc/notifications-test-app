'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createAction(name, function(notification) {
      this.dispatch(name, notification);
    });
  }

}(module));
