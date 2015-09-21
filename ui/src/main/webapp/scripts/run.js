'use strict';

(function(require, module) {
  module.exports = function(User, React, Router, ReactBootstrap, moment, jQuery,
  Fluxxor) {

    var context = require('./context')(
      {
        React: React,
        ReactRouter: ReactRouter,
        ReactBootstrap: ReactBootstrap,
        moment: moment,
        jQuery: jQuery,
        Fluxxor: Fluxxor
      }
    );
    context.user = User;

    require('./components')(context);

    require('./routes.jsx')(context);

    require('./flux')(context);

    Router.run(context.routes, Router.HashLocation, function(Handler) {
      React.render(
        <Handler/>,
        document.getElementById('content')
      );
    });
  };
}(require, module));
