import React, { Component } from 'react';
import './styles/RoomList.css';

class RoomList extends Component {
	constructor(props) {
		super(props);
		this.state= {
			rooms: [], 
			newRoomName: ''
		};

		this.roomsRef = this.props.firebase.database().ref('rooms');
		}

		componentDidMount() {
			this.roomsRef.on('child_added', snapshot => {
       			const room = snapshot.val();
       			room.key = snapshot.key;
       			this.setState({ rooms: this.state.rooms.concat( room ) })
		});
		}

		createRoom(newRoomName) {
			if (!this.state.newRoomName){ return }
			this.roomsRef.push({
				name: this.state.newRoomName
			});
			this.setState({ newRoomName:" " });
		}

		handleChange(e){
			e.preventDefault();
			this.setState({ newRoomName: e.target.value })
		}

		handleRoomClick(room){
			this.props.activeRoom(room);
		}

   render() {
   	return (
       	<div>
 			
 			</div>
     );
   }
}


export default RoomList;
