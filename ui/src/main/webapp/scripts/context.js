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

      },
      createComponent: function(groupName, name, obj) {
        var component = this.libs.React.createClass(obj);
        var group = this.components[groupName];
        if(!group) {
          group = {};
          this.components[groupName] = group;
        }
        group[name] = component;
      }
    };
  };

}(module));
