import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList';
import MessageList from './components/MessageList';


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
	constructor(props){
		super(props);
		this.state= { 
			activeRoom: null
		}; 
		
		this.setActiveRoom = this.setActiveRoom.bind(this);
	
		
	}
	
	setActiveRoom (room) {
		console.log(room);
		this.setState({activeRoom : room});
	}
	
	
	
	
  render() {
    return (
      <div className="App">
      <main>
    
      	<MessageList 
      		firebase= {firebase}
      		activeRoom = {this.activeRoom}
      		setActiveRoom = {this.setActiveRoom}
      	/>
      </main>
      
      <aside>
      <h2>Bloc Chat</h2>
      	<RoomList 
      		firebase = {firebase}
      		activeRoom = {this.activeRoom}
      		setActiveRoom = {this.setActiveRoom}
      	/>
      </aside> 


      	
     
      
      
      </div>
    );
  }
}

export default App;
