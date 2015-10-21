'use strict';

(function (require, React, Router, ReactBootstrap,
  moment, jQuery, Fluxxor, Notifications) {

  var run = require('./run');

  jQuery.ajax('/api/messages/user', {
    method: 'GET',
    success: function(response) {
      var data = JSON.parse(response);
      if(data.user) {
        run(data, React, Router, ReactBootstrap, moment, jQuery,
          Fluxxor, Notifications);
      }
      else {
        window.location = '/login';
      }
    },
    error: function(err) {
      console.error(err);
    }
  });



}(require, window.React, window.ReactRouter, window.ReactBootstrap,
  window.moment, window.jQuery, window.Fluxxor, window.Notifications));
