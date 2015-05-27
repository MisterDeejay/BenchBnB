# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
 benches = Bench.create([
   {description: 'Union Square', lat: 37.787665, lng: -122.4076787},
   {description: 'Ferry Building', lat: 37.7962906, lng: -122.3935214},
   {description: 'Pier 39', lat: 37.8113344, lng: -122.4107212},
   {description: 'Nob Hill / Huntington Park', lat: 37.7923721, lng: -122.4123356},
   {description: 'Twin Peaks', lat: 37.754903, lng: -122.4465002}
   ])
