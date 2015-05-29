ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  receiveFiltered: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_FILTERED,
      benches: benches
    })
  }
}
