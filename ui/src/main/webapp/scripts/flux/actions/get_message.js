'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createAction(name, function(id) {
      this.dispatch(name, id);
    });
  }

}(module));
