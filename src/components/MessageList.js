import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props){
		super(props);
		this.state= {
			Messages: []
		};
		

	this.messagesRef = this.props.firebase.database().ref('messages');

	}
	
render() {
	return (
	<div>
	
	</div>
	
	);
}

}



export default MessageList; 