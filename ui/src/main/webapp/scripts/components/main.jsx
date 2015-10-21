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
    var AlertNotification = Notifications.AlertNotification;

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
              <div className="col-lg-12">
                <NewMessage></NewMessage>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ListNotifications></ListNotifications>
              </div>
              <div className="col-lg-6">
                <AlertNotification></AlertNotification>
              </div>
            </div>
          </div>
        );
      }
    });

  };

}(module));
