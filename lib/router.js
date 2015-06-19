Router.configure({
  waitOn: function () {
    return Meteor.subscribe('buses');
  }
});

Router.map(function() {
  this.route('layout', {path: '/'});
  this.route('newbus', {path: '/newbus'});
  this.route('login', {path: '/login'});
  this.route('signup', {path: '/signup'});
})

Router.route('/buses/:_id', function () {
  var bus = Buses.findOne({_id: this.params._id});
  this.render('busPage', {data: bus});
});
