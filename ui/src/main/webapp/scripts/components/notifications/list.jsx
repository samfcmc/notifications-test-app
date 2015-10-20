'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;
    var ReactBootstrap = libs.ReactBootstrap;
    var ListGroup = ReactBootstrap.ListGroup;
    var ListGroupItem = ReactBootstrap.ListGroupItem;
    var Notification = context.components.Notifications.Notification;

    context.createComponent(name, 'ListNotifications', {
      mixins: [FluxMixin, StoreWatchMixin('MessagesStore')],
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessagesStore').getState();
      },
      render: function() {
        return (
          <div className="col-lg-12">
            <ListGroup>
              {this.state.notifications.map(function(item) {
                return (
                  <Notification notification={item} key={item.id}></Notification>
                )
              })
              }
            </ListGroup>
          </div>
        );
      }
    });
  };

}(module));
