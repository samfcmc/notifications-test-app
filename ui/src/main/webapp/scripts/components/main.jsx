'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var RouteHandler = libs.ReactRouter.RouteHandler;
    var components = context.components;
    var Messages = components.Messages;
    var NewMessage = Messages.NewMessage;

    var Notifications = components.Notifications;
    var ListNotifications = Notifications.ListNotifications;

    var Navbar = components.Partials.Navbar;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;

    context.createComponent(name, 'Main', {
      mixins: [FluxMixin, StoreWatchMixin('MessagesStore')],
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessagesStore').getState();
      },
      render: function() {
        return (
          <div className="container">
            <Navbar></Navbar>
            <div className="row">
              <NewMessage></NewMessage>
            </div>
            <div className="row">
              <ListNotifications></ListNotifications>
            </div>
          </div>
        );
      }
    });

  };

}(module));
