'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createComponent(name, 'ListMessages', {
      render: function() {
        return (
          <div className="col-lg-12">
            List of messages here...
          </div>
        );
      }
    });
  };

}(module));
