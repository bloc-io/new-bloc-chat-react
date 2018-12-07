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

<<<<<<< HEAD
=======
        });     

>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a
        });
        
        

<<<<<<< HEAD
        });     

=======
>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a
    }

    signInWithPopup(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }


    signOut(){

<<<<<<< HEAD
=======
        this.props.firebase.auth().signOut();  
    }
    

>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a
        this.props.firebase.auth().signOut();
      
    }
    
<<<<<<< HEAD

        this.props.firebase.auth().signOut();  
    }
    

=======
    
>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a

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

<<<<<<< HEAD
=======
				<button onClick={this.signOut}> Sign Out</button> 	
			</div>  

>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a
				<button onClick={this.signOut}> Sign Out</button> 
			
			</div>
				
			
    
<<<<<<< HEAD
				<button onClick={this.signOut}> Sign Out</button> 	
			</div>  
=======
>>>>>>> c3446a2393d977130bec138759dffe0c38019a6a


    );
  }
}

export default User;