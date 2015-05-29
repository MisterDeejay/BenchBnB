(function(root){
  var CHANGE_EVENT = "change";
  var _highlightedBench;
  var changeHighlightedBench = function(bench) {
    _highlightedBench = bench;
  };
  var resetHighlightedBench = function(bench) {
    _highlightedBench = null;
  };
  root.HighlightedBenchStore = $.extend({}, EventEmitter.prototype, {
    currentBench: function(){

      return _highlightedBench;
    },
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType) {
        case HighlightedBenchConstants.MOUSE_ENTERED:
          changeHighlightedBench(payload.bench);
          HighlightedBenchStore.emit(CHANGE_EVENT);
          break;
        case HighlightedBenchConstants.MOUSE_LEFT:
          resetHighlightedBench(payload.bench);
          HighlightedBenchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
