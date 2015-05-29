(function(root){
  var CHANGE_EVENT = "change";
  var _benches = [];
  var resetBenches = function(benches) {
    _benches = benches;
  }
  var filterBenches = function(benches) {
    var oldBenches = _benches.slice(0);
    _benches = _.intersection(oldBenches, benches);
  }
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice(0);
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        resetBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
      if(payload.actionType === BenchConstants.BENCHES_FILTERED) {
        // finished here on 5/28 6pm -- check what the payload looks like
        // and make sure it is the actual benches we're looking for. right now
        // no benches are showing up on map
        filterBenches(payload.benches);
        BenchStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this)
