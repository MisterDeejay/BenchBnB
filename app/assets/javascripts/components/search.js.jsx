var Search = React.createClass({
  render: function(){
    return (
      <div>
        <Map />
        <SeatFilter />
        <BenchIndex benches={BenchStore.all()}/>
      </div>
    );
  }
});
