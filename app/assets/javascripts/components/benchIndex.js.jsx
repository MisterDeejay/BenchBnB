var BenchIndex = React.createClass({
  getInitialState: function(){
    return ({ benches: BenchStore.all()});
  },
  render: function(){
    var view = this.state.benches.map(function(bench){
      return <BenchItem key={bench.id} bench={bench}/>
    });

    return (
      <div>
        <ul>
          {view}
        </ul>
      </div>
    );
  },

  componentDidMount: function(){
    // this.props.benches.fetch();
    BenchStore.addChangeListener(function(){
      this.setState({benches: BenchStore.all()});
    }.bind(this));
  }
});
