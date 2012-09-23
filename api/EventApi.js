var event = require('../models/Event');
var _ = require('underscore');

var EventApi = function (app) {
    this.app = app;
};

EventApi.prototype.start = function() {
    this.app.get('/api/event', function(req, resp){
        resp.send(event);
    });

    this.app.get('/api/event/talks', function(req, resp){
        resp.send(event.Talks);
    });

    this.app.get('/api/event/talks/:id', function(req, resp){
        var id = req.params.id;

        var talk = _.find(event.Talks, function(talk){
            return talk.id == id;
        });

        resp.send(talk);
    });

    this.app.get('/api/event/speakers', function(req, resp){
        var speakers = _.pluck(event.Talks, 'speaker');

        resp.send(_.sortBy(speakers, function(speaker){
                    return speaker.id;
                })
        );
    });

    this.app.get('/api/event/speakers/:id', function(req, resp){
        
        var id = req.params.id;
        var speaker = _.chain(event.Talks)
                        .map(function(talk){
                            return talk.speaker;
                        })
                        .find(function(speaker){
                            return speaker.id == id;
                        })
                        .value();

        resp.send(speaker);
    });
};

module.exports = EventApi;