import React, { Component } from 'react';

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
 			<h2 className="roomHeader">Rooms</h2>
     	<p className="roomList">{this.state.rooms.map((room) => (<button className="room-buttons" key={room.name} onClick={() => this.props.setActiveRoom(room)}>{room.name}</button>))}</p>
      <form className="newRooms" onSubmit={ (e) => this.createRoom(e) }>
  	         <input className="form-input" type="text" value={ this.state.newRoom } onChange={(e) => this.handleChange(e)} />
  	         <input className="create-button" type="submit"  value="Create New Room"/>
  	  </form>
 			</div>
     );
   }
}


export default RoomList;
