'use strict';

(function(module) {

  module.exports = function(context, name) {
    var libs = context.libs;
    var Fluxxor = libs.Fluxxor;
    var FluxMixin = Fluxxor.FluxMixin(libs.React);
    var StoreWatchMixin = Fluxxor.StoreWatchMixin;
    var ReactBootstrap = libs.ReactBootstrap;
    var Badge = ReactBootstrap.Badge;

    context.createComponent(name, 'Navbar', {
      mixins: [FluxMixin, StoreWatchMixin('MessagesStore')],
      getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store('MessagesStore').getState();
      },
      render: function() {
        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                  Notifications Test App
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">New Messages <Badge>{this.state.unread}</Badge>
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/logout">Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
    });
  };

}(module));
