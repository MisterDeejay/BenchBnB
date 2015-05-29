BenchActions = {
  startMarkerBounce: function(bench){
    AppDispatcher.dispatch({
      actionType: HighlightedBenchConstants.MOUSE_ENTERED,
      bench: bench
    });
  },

  stopMarkerBounce: function(bench){
    AppDispatcher.dispatch({
      actionType: HighlightedBenchConstants.MOUSE_LEFT,
      bench: bench
    });
  },

  filterBenches: function(range){
    AppDispatcher.dispatch({
      actionType: BenchConstants.FILTER_BENCHES,
      range: range
    })
  }
}
