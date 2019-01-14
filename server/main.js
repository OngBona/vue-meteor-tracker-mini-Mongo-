import Messages from '/boths/items' //Must be import it

// import {
//   Meteor
// } from 'meteor/meteor '
Meteor.startup(() => {
  
  // code to run on server at startup
  import '../boths/methods_branch'
  import '../boths/methods_item'
  import '../boths/methods_user'
  // Meteor.methods({
  //   addMessage(message) {
  //     return Messages.insert(message)
  //   },
  //   removeMessage(_id) {
  //     Messages.remove(_id);
  //   },
  // });


});
Meteor.publish('messages', function () {
  // console.log('Pub');
  return Messages.find();
});