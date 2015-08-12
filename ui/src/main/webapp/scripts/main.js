'use strict';

(function (require, React, Router, ReactBootstrap, moment, jQuery) {

  var run = require('./run');

  jQuery.ajax('/api/bennu-core/profile', {
    method: 'GET',
    success: function(user) {
      if(user.username) {
        run(user, React, Router, ReactBootstrap, moment, jQuery);
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
  window.moment, window.jQuery));
