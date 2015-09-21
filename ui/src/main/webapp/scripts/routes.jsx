/*
 * Routes definition
 */

(function(module) {

  module.exports = function(context) {
    var libs = context.libs;
    var Router = libs.ReactRouter;
    var components = context.components;
    var Route = Router.Route;
    var Main = components.Main.Main;
    var RouteHandler = Router.RouteHandler;

    context.routes = (
      <Route handler={Main} path="/">
      </Route>
    );

  };

}(module));
