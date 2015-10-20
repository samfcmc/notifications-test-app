'use strict';

(function(module) {

  module.exports = function(context, name) {
    var ReactBootstrap = context.libs.ReactBootstrap;
    var Panel = ReactBootstrap.Panel;
    context.createComponent(name, 'Message', {
      getTitle: function() {
        return 'From: ' + this.props.message.from.username;
      },
      render: function() {
        var message = this.props.message;
        return (
          <div>
            <Panel header={this.getTitle()}>
              {message.text}
            </Panel>
          </div>
        );
      }
    });
  };

}(module));
