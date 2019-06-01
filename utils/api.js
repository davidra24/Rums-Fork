import firebase from 'react-native-firebase';

class API{
  async getRooms(){
    var roomsList = [];
    var rooms = await firebase.database().ref("rooms");
    await rooms.on('value',  (data) => {
      data.forEach((doc) =>{
        roomsList.push({
          key: doc.key,
          dislikes: doc.toJSON().dislikes,
          likes: doc.toJSON().likes,
          neighborhood: doc.toJSON().neighborhood,
          price: doc.toJSON().price,
          pictures: doc.toJSON().pictures,
          description: doc.toJSON().description,
          comments: doc.toJSON().comments
        });
      });
    });
    return roomsList;
  }
}

export default new API();
