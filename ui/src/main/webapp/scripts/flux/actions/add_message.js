'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createAction(name, function(payload) {
      this.dispatch(name, payload);
    });
  }

}(module));
