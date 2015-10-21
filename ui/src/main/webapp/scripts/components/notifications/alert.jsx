'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;
    var ReactBootstrap = libs.ReactBootstrap;
    var Alert = ReactBootstrap.Alert;
    var Notification = context.components.Notifications.Notification;

    context.createComponent(name, 'AlertNotification', {
      mixins: [FluxMixin, StoreWatchMixin('NotificationsStore')],
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('NotificationsStore').getState();
      },
      handleAlertDismiss: function() {
        var flux = this.getFlux();
        flux.actions.DISMISS_ALERT();
      },
      render: function() {
        if(this.state.alertVisible) {
          return (
            <div className="col-lg-12">
              <Alert bsStyle="info" onDismiss={this.handleAlertDismiss} dismissAfter={5000}>
                <h4>New messages</h4>
                <p>You have {this.state.unread} unread messages</p>
              </Alert>
            </div>
          );
        }
        else {
          return (
            <div></div>
          );
        }
      }
    });
  };

}(module));
