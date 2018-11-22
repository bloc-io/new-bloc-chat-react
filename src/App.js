import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList';
import MessageList from './components/MessageList';
import './styles/RoomList.css';
import './styles/MessageList.css';



var config = {
    apiKey: "AIzaSyDk1OeWn8XNGaPpNmf-9ENzACPqvKILbzc",
    authDomain: "new-bloc-chat-react-3a2d2.firebaseapp.com",
    databaseURL: "https://new-bloc-chat-react-3a2d2.firebaseio.com",
    projectId: "new-bloc-chat-react-3a2d2",
    storageBucket: "new-bloc-chat-react-3a2d2.appspot.com",
    messagingSenderId: "846232048758"
  };
  firebase.initializeApp(config);



class App extends Component {
	constructor(props){
		super(props);
		this.state= { 
			activeRoom: [
				{name: ''},
				{key: ''}
			]
		}; 
		
		this.handleRoomClick = this.handleRoomClick.bind(this);	
	}
	
	
	handleRoomClick(room) {
		this.setState({activeRoom: room});
		console.log(room);
		console.log("the new active room is ", room);
		
	}
	
	
render() {
    return (
      <div className="App">
     
      	<div className="section-1">
      		<h2>Bloc Chat</h2>
      		<RoomList
      			updateActiveRoom={this.handleRoomClick}
      			firebase={firebase}
      			activeRoom={this.state.activeRoom}
      			handleRoomClick={this.handleRoomClick.bind(this)}
      		/>
      	
      	</div>
      	<div className="section-2">
      		
      		<MessageList 
				  firebase={firebase}
				  handleRoomClick={this.handleRoomClick}
				  activeRoom={this.state.activeRoom}
				  handleRoomClick={this.handleRoomClick.bind(this)}
			/>
      	
      	</div>
      
      
      
     
    
      
    


      	
     
      
      
      </div>
    );
  }
}

export default App;
