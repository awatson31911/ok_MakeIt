var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
const routes = require("express").Router();

var requestSettings = {
  method: 'GET',
  url: 'http://datamine.mta.info/mta_esi.php?key=0b8fe64ef8232abf1e36c484b4108759&feed_id=1',
  encoding: null
};

routes.get('/routetime',
  (req, res) => {
    let allTrips = [];
      request(requestSettings, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
          feed.entity.forEach(function (entity) {
            if (entity) {
              allTrips.push(entity)
            }
          });
        }
          res.json(allTrips)
      });
  })

  // converts unix	new Date(1501789133*1000).toString()




module.exports = routes