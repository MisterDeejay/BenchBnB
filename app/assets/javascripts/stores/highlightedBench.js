(function(root){
  var CHANGE_EVENT = "change";
  var _highlightedBench;
  var changeHighlightedBench = function(bench) {
    this._highlightedBench = bench;
    console.log("mouse enter! bench:" + bench.description);
  };
  var resetHighlightedBench = function(bench) {
    this._highlightedBench = null;
    console.log("mouse leave! bench:" + bench.description);
  };
  root.HighlightedBenchStore = $.extend({}, EventEmitter.prototype, {
    currentBench: function(){
      return _highlightedBench;
    },
    // all: function() {
    //   return _highlightedBench.slice(0);
    // },
    // addMouseEnterListener: function(callback){
    //   this.on(CHANGE_EVENT, callback);
    // },
    // removeMouseEnterListener: function(callback){
    //   this.removeListener(CHANGE_EVENT, callback);
    // },
    // addMouseLeaveListener: function(callback){
    //   this.on(CHANGE_EVENT, callback);
    // },
    // removeMouseLeaveListener: function(callback){
    //   this.removeListener(CHANGE_EVENT, callback);
    // },
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
