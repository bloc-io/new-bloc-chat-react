import React, { Component } from 'react';


class MessageList extends Component {
	constructor(props){
		super(props);
		this.state= {
			messages: [],	
			username: '',
			content: '',
			sentAt: '',
			roomId:'',
			currentMessageRoom: '',
		};
	
	this.messagesRef = this.props.firebase.database().ref('messages');
	
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
			this.state.currentMessageRoom = this.props.activeRoom;
		}
	}

	render() {
		const currentMRoom = this.props.activeRoom.name; 
		
		const filteredVersion = this.state.messages.filter(message=> {
			return message.roomId === this.props.activeRoom.name
		});

		const mapThrough = filteredVersion.map(message=> {
			return <li key={message.content}>
				username: {message.username}--- 
				message:{message.content} 
				(sent at){message.sentAt}
				</li>
		});
		return (
			<div>
			<h1> Current Room ---- {this.props.activeRoom.name}</h1>
		
			{mapThrough}
			
			
			
		
			</div>
		);
	}
	}
			
			
		

export default MessageList; 