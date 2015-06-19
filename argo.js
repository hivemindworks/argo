Buses = new Mongo.Collection("buses");

if (Meteor.isClient) {
  Meteor.subscribe("buses");

  // This code only runs on the client
  Template.layout.helpers({
    buses: function () {
      return Buses.find({});
    }
  });

  Template.newbus.onRendered(function(){
    this.$('#departuretime').datetimepicker();
    this.$('#returntime').datetimepicker();

    //add linked date time picker code
    //so people can't fuck up min and max dates

    window.onload = function() {
      $('#startLoc').geocomplete();
      $('#destinationLoc').geocomplete();
    }
  })

  Template.newbus.events({
    "submit .new-bus": function (event) {
      // This function is called when the new task form is submitted

      var name = event.target.name.value;
      var start = event.target.start.value;
      var destination = event.target.destination.value;
      var embark = event.target.embark.value;
      var depart = event.target.depart.value;

      var newBus = {
        name: name,
        start: start,
        destination: destination,
        embark: embark,
        depart: depart,
        passengers: [],
        seats: 50,
        createdAt: new Date() // current time
      };


      newBus._id = Buses.insert(newBus);

      Router.go('busPage', newBus);

      /*
      // Clear form
      event.target.text.value = "";

      $('#startLoc').geocomplete();
      $('#destinationLoc').geocomplete();

      // Prevent default form submit
      return false;
      */
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish("buses", function () {
    return Buses.find();
  });
}
