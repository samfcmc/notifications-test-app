'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createAction(name, function() {
      this.dispatch(name);
    });
  }

}(module));
