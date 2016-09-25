(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var roomRef = new Firebase("bloc-chat-3f0c2.firebaseio.com/rooms");
    var rooms = $firebaseArray(roomRef);

    Room.all = rooms;
      
    return Room;
  }
    
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();