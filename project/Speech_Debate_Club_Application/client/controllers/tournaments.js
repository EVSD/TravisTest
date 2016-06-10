/*
1. define tournaments as a variable, with tournamentname within in to refer to the name fo the tournament
2. finish tournamentsignups? for the demo i guess you could jsut use dummy variables
*/

if (Meteor.isClient) {

    Template.tournamentregistration.helpers({
        'tournamentList': function () {
          var tournamentArray = Meteor.Tournaments.find({},{tournamentName: 1}).toArray();
          var name = "";
          var availableTournaments = [];
          for (var i=0; i < tournamentArray.length; i++) {
            name = tournamentArray[i];
            availableTournaments.push({
              availableTournament: name
            });
          }
          return availableTournaments;
          /*
          var available = [];
          var name = "";
          for (var i=0; i < Meteor.Tournaments.length; i++) {
            name = Meteor.Tournaments[i].tournamentname;
            available.push({
              availableTournament: name
            });
          }
          return available
          */
        },


        'allowedPerson': function(){
          var namesArray = Meteor.Users.find({},{firstName: 1}).toArray();
          var name = "";
          var availablePartners = [];
          for (var i=0; i < namesArray.length; i++) {
            name = namesArray[i];
            availablePartners.push({
              availablePartner: name
            });
          }
          return availablePartners;
        }
          /*
          var allowed;
          var name = "";
          for(var i=0; Meteor.Users.length; i++){
            name = Meteor.Users[i].profile.firstName;
            allowed.push({
                possiblePartner: name
            });
          }
          return allowed;
        }
        */
    });


    Template.tournamentregistration.events({
        'submit form': function(){
          Meteor.users.tournamentHistory.insert({
              tournament: event.target.tournament,
              whichEvent: event.target.whatEvent,
              partner: event.target.partner,
          }, {ordered: false})}
    });
}
