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
        
        if (this.props.user == null){
        	this.props.setGuest();
        }
        
    }

    signInWithPopup(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }


    signOut(){
        this.props.firebase.auth().signOut();
      
    }
    
    
<<<<<<< HEAD
  render() {
      const currentUser =this.props.user;
 
      
    return ( 
       <div>
        <h3>Current User:</h3>{currentUser}
        <button onClick={this.signInWithPopup}>Sign In</button>
        <button onClick={this.signOut}> Sign Out</button>
        </div>
=======
	render() {
		let uiDisplayName = this.props.user; 
		if (uiDisplayName == null){
			uiDisplayName = 'anonymous';
		}
		else {
			uiDisplayName = this.props.user.displayName;
		}
		
		return ( 
			<div>
				<h3>Current User: {uiDisplayName}</h3> 
				<button onClick={this.signInWithPopup}> Sign In</button> 
				<button onClick={this.signOut}> Sign Out</button> 
			
			</div>
				
			
    
>>>>>>> checkpoint-5-set-username
    );
  }
}

export default User;
