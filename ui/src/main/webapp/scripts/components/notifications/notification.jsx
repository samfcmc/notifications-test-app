'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var moment = libs.moment;

    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;

    var ReactBootstrap = libs.ReactBootstrap;
    var ListGroupItem = ReactBootstrap.ListGroupItem;
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;

    context.createComponent(name, 'Notification', {
      mixins: [FluxMixin, StoreWatchMixin('MessageStore')],
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessageStore').getState();
      },
      getInitialState: function() {
        return {
          showModal: false
        };
      },
      open: function() {
        var flux = this.getFlux();
        flux.actions.GET_MESSAGE(this.props.notification.payload.link);
        this.setState({showModal: true});

      },
      close: function() {
        this.setState({showModal: false});
        //TODO: Use store to read the notification
      },
      getMoment: function(timestamp) {
        return moment(timestamp).fromNow();
      },
      getClass: function() {
        if(!this.props.notification.read) {
          return 'active';
        }
        else {
          return '';
        }
      },
      render: function() {
        var notification = this.props.notification;
        var message = this.state.message;
        return (
          <ListGroupItem onClick={this.open} className={this.getClass()}>
            {this.getMoment(notification.timestamp)} {this.props.notification.payload.type}
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {this.getMoment(message.timestamp)} From: {message.from.username}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{message.text}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </ListGroupItem>
        );
      }
    });

  };

}(module));
