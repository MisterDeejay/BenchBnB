var SeatFilter = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return({seatingMin: 1, seatingMax: 100})
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var filterRange = this.state;
    ApiUtil.filterBenches(filterRange);
  },
  render: function() {
    return (
      <div id="slider-range">
        <label htmlFor="seating-min">Min: </label>
        <input id="seating-min" type="number" min="1" max="100" valueLink={this.linkState('seatingMin')} />
        <label htmlFor="seating-max">Max: </label>
        <input id="seating-max" type="number" min="1" max="100" valueLink={this.linkState('seatingMax')} />
        <br/>
        <input type="submit" onClick={this.handleSubmit} value="Filter"/>
      </div>
      )
  }
});
