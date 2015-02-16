App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
  	return $.getJSON('http://52.10.3.48/').then(function(data) {
  		return [data.Stuff.Fruit.Apples, data.Stuff.Fruit.Oranges];});
//    return ['red', 'yellow', 'blue', 'green'];
  }
});

