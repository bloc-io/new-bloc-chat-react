import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var config = {
  apiKey: "AIzaSyC4Un8zGSOjyo_Hmh1QH53Fpvq5Wj-nSu8",
  authDomain: "new-bloc-chat-react.firebaseapp.com",
  databaseURL: "https://new-bloc-chat-react.firebaseio.com",
  projectId: "new-bloc-chat-react",
  storageBucket: "new-bloc-chat-react.appspot.com",
  messagingSenderId: "343612205762"
};
firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
      <main>
      <h1>Bloc Chat</h1>
      <RoomList
        firebase = { firebase }
      />
       
      </main>
      </div>
    );
  }
}

export default App;
