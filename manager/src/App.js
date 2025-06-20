import './App.css';
import Navbar from './Navbar.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import CreateAccount from './Pages/CreateAccount.js';
import {useState, useEffect} from 'react';
import { auth, signOutUser } from './firebase.js';

function App() {
  let Component = Home;
  const [state, setState] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if(state === 0) {
    Component = Home;
  }
  else if(state === 1) {
    if(!user){
      Component = Login;
    }
    else{
      signOutUser();
      setState(0);
    }
  }
  else if(state === 2 && !user) {
    Component = CreateAccount;
  }

  return (
    <div className="App">
      <Navbar setParentState={setState} />
      <div className="Content">
        <Component setParentState={setState} user={user} />
      </div>
      
    </div>
  );
}

export default App; 