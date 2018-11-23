import React, { Component } from 'react';



class RoomList extends Component {
    constructor(props){
        super(props);
        this.state= {
            rooms: [],
            newRoomName: ''
        };
    this.roomsRef= this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.createNewRoom = this.createNewRoom.bind(this);
    }

   

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val(); 
            room.key= snapshot.key;   
            this.setState({ rooms: this.state.rooms.concat( room )})
            
        });
    }
    
    handleClickSegway(room){
        this.props.handleRoomClick(room);
        console.log('click! segway');
    }

    handleChange(e){
        this.setState({newRoomName: e.target.value});
    }

    createNewRoom(e){
        e.preventDefault();
        this.roomsRef.push({
            name: this.state.newRoomName
        });
        this.setState({newRoomName: " "});
    }


  render() {
        const roomList = this.state.rooms.map((room) =>
            <li key ={room.key} onClick= {()=>this.props.handleRoomClick(room)}>{room.name}</li>
        );
      
    return (
        <div>
        <ul>{roomList}</ul>

        <form onSubmit={this.createNewRoom}>
        <input type="text" placeholder="room name" value={this.state.newRoomName} onChange={(e)=>this.handleChange(e)}/>
        <input type="submit" value="Create"/>
        </form>
        </div>
       

    );
  }
}

export default RoomList;
