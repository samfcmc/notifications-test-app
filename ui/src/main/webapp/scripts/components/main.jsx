'use strict';

(function(module) {

  module.exports = function(context, name) {
    var RouteHandler = context.libs.ReactRouter.RouteHandler;
    var components = context.components;
    var Messages = components.Messages;
    var NewMessage = Messages.NewMessage;
    var ListMessages = Messages.ListMessages;
    
    context.createComponent(name, 'Main', {
      render: function() {
        return (
          <div className="container">
            <div className="row">
              <NewMessage></NewMessage>
            </div>
            <div className="row">
              <ListMessages></ListMessages>
            </div>
          </div>
        );
      }
    });

  };

}(module));
