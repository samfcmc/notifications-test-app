'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;
    var Message = context.components.Messages.Message;
    context.createComponent(name, 'ListMessages', {
      mixins: [FluxMixin, StoreWatchMixin('MessagesStore')],
      getInitialState: function() {
        return {

        };
      },
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessagesStore').getState();
      },
      render: function() {
        var messages = this.state.messages;
        console.log(typeof(messages));
        return (
          <div className="col-lg-12">
            {messages.map(function(item) {
              return (
                <Message message={item} key={item.id}></Message>
              );
            })}
          </div>
        );
      }
    });
  };

}(module));
