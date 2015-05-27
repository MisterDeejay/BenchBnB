class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    Bench.all.select{|bench| bench.in_bounds?(bounds)}
  end

  def in_bounds?(bounds)
    ne_lat, ne_lng = bounds["northEast"]["lat"], bounds["northEast"]["lng"]
    sw_lat, sw_lng = bounds["southWest"]["lat"], bounds["southWest"]["lng"]
    return false if self.lat < sw_lat.to_f || self.lat > ne_lat.to_f
    return false if self.lng < sw_lng.to_f || self.lng > ne_lng.to_f
    true
  end

end
