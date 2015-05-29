var BenchItem = React.createClass({
  getInitialState: function(){
    return { expanded: false }
  },

  triggerStartBounce: function(event) {
    BenchActions.startMarkerBounce(this.props.bench);
  },

  triggerStopBounce: function(event) {
    BenchActions.stopMarkerBounce(this.props.bench);
  },
  // componentDidMount: function(){
  //   HighlightedBenchStore.addMouseEnterListener(this.triggerStartBounce);
  //   HighlightedBenchStore.addMouseLeaveListener(this.triggerStopBounce);
  // },

  render: function(){
    var view;
    if(this.state.expanded){
      view = (
        <div>
          <p>Latitude: {this.props.bench.lat}</p>
          <p>Longitutde: {this.props.bench.lng}</p>
        </div>
      );
    }
    return (
      <li>
        <h3 className="benchItemHeader" onMouseEnter={this.triggerStartBounce}
        onMouseLeave={this.triggerStopBounce} onClick={this.changeState}>
          {this.props.bench.description}
        </h3>
        {view}
      </li>
    )

  },

  changeState: function(){
    this.setState({ expanded: !this.state.expanded });
  }
});
