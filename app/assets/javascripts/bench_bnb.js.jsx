$(document).ready(function() {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Route = ReactRouter.Route;
  var App = React.createClass({
    render: function(){
      return (
        <div>
          <header><h1>Bench BnB</h1></header>
          <RouteHandler/>
        </div>
      );
    }
  });

  var routes = (
    <Route name="home" path="/" handler={App}>
      <ReactRouter.DefaultRoute handler={Search}/>
      <Route name="new" path="/new" handler={BenchForm} />
    </Route>
  );

  ReactRouter.run(routes, function(Handler){
    React.render(<Handler />, root);
  });
});
