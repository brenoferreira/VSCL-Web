var Talks = Backbone.Collection.extend({
    url: '/api/event/talks'
});

var Speakers = Backbone.Collection.extend({
    url: '/api/event/speakers'
});

var HomeView = Backbone.View.extend({
    render: function(){
        var mainPageHtml = $('#main-page-template').html()

        this.$el.html(mainPageHtml);
    }
});

var Router = Backbone.Router.extend({
    initialize: function(options){
        this.homeView = new HomeView({el: $('#content')});
    },

    routes: {
        'home': 'renderHomeView'
    },

    renderHomeView: function(){
        this.homeView.render();
    }
});

$(function(){
    var router = new Router();
    Backbone.history.start();
    Backbone.history.navigate('home', {trigger:true});
})
