import React, { Component } from 'react';

class User extends Component {
    constructor(props){
        super(props);

    this.signInWithPopup=this.signInWithPopup.bind(this);
    this.signOut=this.signOut.bind(this);
  

    }
    
    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });
    }

    signInWithPopup(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }


    signOut(){
        this.props.firebase.auth().signOut();
    }
    
    
  render() {
      const currentUser =this.props.user;
 
      
    return ( 
       <div>
        <h3>Current User:</h3>{currentUser}
        <button onClick={this.signInWithPopup}>Sign In</button>
        <button onClick={this.signOut}> Sign Out</button>
        </div>
    );
  }
}

export default User;
