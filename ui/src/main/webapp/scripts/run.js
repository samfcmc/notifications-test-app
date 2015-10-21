'use strict';

(function(require, module) {
  module.exports = function(Data, React, Router, ReactBootstrap, moment, jQuery,
  Fluxxor, Notifications) {

    var context = require('./context')(
      {
        React: React,
        ReactRouter: ReactRouter,
        ReactBootstrap: ReactBootstrap,
        moment: moment,
        jQuery: jQuery,
        Fluxxor: Fluxxor,
        Notifications: Notifications
      }
    );

    context.user = Data.user
    context.config = {notifications: Data.notifications};

    require('./components')(context);
    require('./routes.jsx')(context);
    require('./flux')(context);

    var flux = context.flux;

    Router.run(context.routes, Router.HashLocation, function(Handler) {
      React.render(
        <Handler flux={flux}/>,
        document.getElementById('content')
      );
    });
  };
}(require, module));
