import React, { Component } from 'react';
import * as firebase from 'firebase';

class MessageList extends Component {
constructor(props){
super(props);
this.state= {
	messages: [{
		username: '',
		content: '',
		sentAt: '',
		roomId:''
	}],
	displayedMessages:[],
	currentMessageRoom: '',
	newMessageContent: '',
};	
this.messagesRef = this.props.firebase.database().ref('messages');
this.pushNewMessage = this.pushNewMessage.bind(this);
}
	
componentDidMount() {
	this.messagesRef.on('child_added', snapshot => {
	const message = snapshot.val();
	message.key= snapshot.key;
	this.setState({ messages: this.state.messages.concat( message )})
	});	
}

changeCurrentMessageRoom(){
	if (this.props.activeRoom === this.state.currentMessageRoom){
		return null;
	}
	else {
		this.setState({currentMessageRoom: this.props.activeRoom});
	}
}

pushNewMessage(e){
	e.preventDefault();
	if (this.props.userData === null){
		console.log("please sign in");
	}
	else {
		if (this.currentMessageRoom === " "){
			console.log('click on a room first');
			console.log(this.state.currentMessageRoom);
		} 
		else {
			var msg ={
			username:  this.props.userData.displayName, 
			content: this.state.newMessageContent,
			roomId: this.props.activeRoom.name
			}
			this.messagesRef.push(msg);
			console.log(msg);
			this.setState({newMessageContent: " "});
		}
	}	
}
	
handleTextChange(e){
	e.preventDefault();
	this.setState({newMessageContent: e.target.value});
}

updateMessagesDisplayed(activeRoom){
	this.setState({ displayMessages: this.state.messages.filter(message=>
		message.roomId === this.currentMessageRoom)});
}
	
	
render() {
const filteredVersion = this.state.messages.filter(message=> {
return message.roomId === this.props.activeRoom.name
});

const mapThrough = filteredVersion.map(message=> {
return(
	<li key={message.content}>
	<p>username: {message.username}</p>
	<p>message:{message.content}</p>
	<p>(sent at){message.sentAt}</p>
	</li>
);
});
		
	return (
	<div>
	<h1> Current Room ---- {this.props.activeRoom.name}</h1>
		{mapThrough}
	<form onSubmit={this.pushNewMessage}>
		<input type="text" 
			value={this.state.newMessageContent} 
			placeholder="Your Message"
			onChange={(e)=>this.handleTextChange(e)}
		/>
		<input type="submit"
			value="Send"
		/>
	</form>
	</div>
	);
	}
	}
			
			
		

export default MessageList; 