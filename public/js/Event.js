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

var CollectionView = Backbone.View.extend({
    initialize: function(options){
        this.template = options.template;
    },

    render: function(){
        var self = this;
        this.collection.fetch({
            success: function(){
                var data = self.collection.toJSON();

                var templateHtml = self.template.html();
                var template = Handlebars.compile(templateHtml);

                var html = template({data: data});

                self.$el.html(html);
            },
            error: function(){

            }
        })
    }
})

var Router = Backbone.Router.extend({
    initialize: function(options){
        this.homeView = new HomeView({el: $('#content')});
        this.talksView = new CollectionView({
            el: $('#content'), 
            collection: new Talks(),
            template: $('#talks-template')
        });
    },

    routes: {
        'palestras': 'renderTalksView',
        'home': 'renderHomeView'
    },

    renderHomeView: function(){
        this.homeView.render();
    },

    renderTalksView: function(){
        this.talksView.render();
    }
});

$(function(){
    var router = new Router();
    Backbone.history.start();
    if(!Backbone.history.fragment)
        router.navigate('home', {trigger: true});
})
