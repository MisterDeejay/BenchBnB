ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: "/benches",
      data: { "bounds": bounds },
      method: "GET",
      success: function(response){
        ApiActions.receiveAll(response);
      }
    });
  },
  filterBenches: function(range) {
    $.ajax({
      url: "/benches",
      data: { range: range },
      method: "GET",
      success: function(response) {
        ApiActions.receiveFiltered(response);
      }
    });
  },
  createBench: function(benchData) {
    return $.ajax({
      url: "/benches",
      data: {bench: benchData},
      method: "POST"
    }).then();
  }
}
