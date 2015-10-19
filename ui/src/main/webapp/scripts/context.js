'use strict';

/*
 * Context: Object with methods and values that will be passed
 * to all modules to avoid passing around a lot of arguments
 */

(function(module) {

  module.exports = function(libs) {
    return {
      libs: libs,
      components: {
        // React components will be stored here
      },
      stores: {
        // Flux stores will be stored here
      },
      actions: {

      },
      createComponent: function(groupName, name, obj) {
        var component = this.libs.React.createClass(obj);
        var group = this.components[groupName];
        if(!group) {
          group = {};
          this.components[groupName] = group;
        }
        group[name] = component;
      },
      createStore: function(name, obj) {
        var Store = this.libs.Fluxxor.createStore(obj);
        this.stores[name] = new Store();
      },
      createAction: function(name, callback) {
        this.actions[name] = callback;
      }
    };
  };

}(module));
