'use strict';

(function(module) {

  module.exports = function(context, name) {

    var ReactBootstrap = context.libs.ReactBootstrap;
    var Input = ReactBootstrap.Input;
    var Button = ReactBootstrap.Button;
    var jQuery = context.libs.jQuery;
    var libs = context.libs;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;

    context.createComponent(name, 'NewMessage', {
      mixins: [FluxMixin, StoreWatchMixin('MessagesStore')],
      getInitialState: function() {
        return {
          message: '',
          to: ''
        }
      },
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessagesStore').getState();
      },
      messageChange: function(event) {
        this.setState({
          message: event.target.value
        });
      },
      userChange: function(event) {
        this.setState({
          to: event.target.value
        });
      },
      createMessage: function(event) {
        var message = this.state.message
        var to = this.state.to
        var flux = this.getFlux();
        var sender = context.user.username;
        if(message && to) {
          flux.actions.ADD_MESSAGE({text: message, to: to, from: sender});
        }
      },
      render: function() {
        return (
          <div>

            <div className="col-lg-6">
              <Input type="text" id="message"
                placeholder="Your message here..."
                value={this.state.message}
                onChange={this.messageChange}>
              </Input>
            </div>
            <div className="col-lg-2">
              <Input type="text"
                placeholder="To..."
                value={this.state.to}
                onChange={this.userChange}>
              </Input>
            </div>
            <div className="col-lg-4">
              <Button onClick={this.createMessage}>Send</Button>
            </div>

          </div>
        );
      }
    });

  };

}(module));
