var React = require("react");
var router = require("react-router");
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var Router = router.Router;
var browserHistory = router.browserHistory;
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
