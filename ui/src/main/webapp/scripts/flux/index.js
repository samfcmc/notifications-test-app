'use strict';

(function(module, require) {

  module.exports = function(context) {
    require('./stores')(context);

    var Fluxxor = context.libs.Fluxxor;
    context.flux = new Fluxxor.Flux(context.stores, {});
  };

}(module, require));
