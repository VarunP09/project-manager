import './App.css';
import Navbar from './Navbar.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import CreateAccount from './Pages/CreateAccount.js';

function App() {
  let Component = Home;

  switch (window.location.pathname) {
    case '/':
      Component = Home;
      break;
    case '/login':
      Component = Login;
      break;
    case '/createAccount':
      Component = CreateAccount;
      break;
    default:
      Component = () => <div>404 Not Found</div>;
  }


  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Component />
      </div>
      
    </div>
  );
}

export default App;
