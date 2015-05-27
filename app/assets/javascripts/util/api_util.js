ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: "/benches",
      data: { "bounds": bounds },
      method: "GET",
      success: function(response){
        ApiActions.receiveAll(response);
      }
    })
  }
}
