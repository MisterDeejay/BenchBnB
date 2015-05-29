var Map = React.createClass({
  mixins: [ReactRouter.Navigation],
  updateMarkers: function() {
    var markerIDs = Object.keys(this.markers);
    BenchStore.all().forEach(function(bench){
      var markerIndex = markerIDs.indexOf(bench.id.toString());
      if (markerIndex == -1) {

        var latLng = new google.maps.LatLng(bench.lat, bench.lng);
        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          position: latLng,
          map: this.map,
          title: bench.description,
          benchID: bench.id
        });
        this.markers[bench.id] = marker;
      } else {
        markerIDs.splice(markerIndex, 1);
      }
    }.bind(this));

    this.removeOldMarkers(markerIDs);
  },
  toggleBounce: function() {
    var currentTarget = HighlightedBenchStore.currentBench();
    if (currentTarget) {
      this.bouncingMarker = this.markers[currentTarget.id];
      this.bouncingMarker.setAnimation(google.maps.Animation.BOUNCE);
    } else {
      if (this.bouncingMarker.getAnimation() != null) {
        this.bouncingMarker.setAnimation(null);
      }
    }
  },
  removeOldMarkers: function(markerIDs){
    markerIDs.forEach(function(markerId){
      var marker = this.markers[markerId];
      marker.setMap(null);
      delete this.markers[markerId];
    }.bind(this));
  },
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.setState({map: this.map});
    this.markers = {};

    BenchStore.addChangeListener(this.updateMarkers);
    HighlightedBenchStore.addChangeListener(this.toggleBounce);
    google.maps.event.addListener(this.map, 'idle', this.handleMapChange);
    google.maps.event.addListener(this.map, 'click', this.addBench);
  },
  componentWillUnmount: function() {
    BenchStore.removeAllListeners();
    HighlightedBenchStore.removeAllListeners();

    google.maps.event.clearListeners(this.map);
  },
  addBench: function(e) {
    var lat = e.latLng.A, lng = e.latLng.F;
    this.transitionTo('new', {}, {lat: lat, lng: lng});
  },
  handleMapChange: function(){
    var bounds = this.map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    bounds = { "northEast": {"lat": ne.A, "lng": ne.F},
               "southWest": {"lat": sw.A, "lng": sw.F} };
    ApiUtil.fetchBenches(bounds);
  },
  render: function(){
    return(
      <div className="map" ref="map">
      </div>
    )
  }
});
