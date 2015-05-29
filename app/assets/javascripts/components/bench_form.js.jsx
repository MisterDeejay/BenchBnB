var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.Navigation],
  getInitialState: function(){
    var lat = this.props.query.lat, lng = this.props.query.lng;
    return({description: '', lat: (lat ? lat : ''), lng: (lng ? lng : ''), seating: 1})
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var benchData = this.state;
    ApiUtil.createBench(benchData).done(function(){
      this.transitionTo("home");
    }.bind(this));
  },
  render: function() {
    return (
      <form>
        <label htmlFor="description">Description: </label>
        <input id="description" type="text" valueLink={this.linkState('description')} />
        <label htmlFor="lat">Latitude: </label>
        <input id="lat" type="text" valueLink={this.linkState('lat')} />
        <label htmlFor="lng">Longitude: </label>
        <input id="lng" type="text" valueLink={this.linkState('lng')} />
        <label htmlFor="seating">Seating: </label>
        <input id="seating" type="number" min="1" max="100" valueLink={this.linkState('seating')} />
        <br />
        <input onClick={this.handleSubmit} type="submit" value="Create bench!" />
      </form>
      );
  }
});
