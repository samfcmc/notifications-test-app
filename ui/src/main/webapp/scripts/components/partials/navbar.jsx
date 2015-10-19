'use strict';

(function(module) {

  module.exports = function(context, name) {
    context.createComponent(name, 'Navbar', {
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
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">New Messages <span className="badge">42</span>
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
