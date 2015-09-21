'use strict';

(function(module) {

  module.exports = function(context, name) {

    var ReactBootstrap = context.libs.ReactBootstrap;
    var Input = ReactBootstrap.Input;
    var Button = ReactBootstrap.Button;

    context.createComponent(name, 'NewMessage', {
      render: function() {
        return (
          <div>
            <div className="col-lg-8">
              <Input type="text"
                placeholder="Your message here...">
              </Input>
            </div>
            <div className="col-lg-4">
              <Button>Send</Button>
            </div>

          </div>
        );
      }
    });

  };

}(module));
