Meteor.startup(function() {
  GoogleMaps.load({
    'sensor': true, //optional
    'key': 'AIzaSyBSUtzXxGvCANJ1pFBzoHJdehQS_UYDToU',
    'libraries': 'places'
  });
})
