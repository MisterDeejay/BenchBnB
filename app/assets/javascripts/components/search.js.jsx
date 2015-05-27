var Search = React.createClass({
  render: function(){
    return (
      <div>
        <Map />
        <BenchIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});
