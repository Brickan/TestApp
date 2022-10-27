import { observable, action, makeObservable } from "mobx";    

class AuthStore {    
@observable isLoggedIn = false;    
@observable loggedinUser = '';    
constructor() {    
   /*make*/ Observable(this);    
}    
@action.bound setLoggedInStatus = (changeflag) => {    
   this.isLoggedIn = changeflag;    
}    
@action.bound setLoggedInUser = (username) => {    
   this.loggedinUser = username;    
   }    
}    
export default AuthStore;     