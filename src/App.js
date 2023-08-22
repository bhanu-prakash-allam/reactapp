import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Test from './components/Test';
import Login from './components/Login';
import UserContext from './components/UserContext';
import { useState } from 'react';
import Fetch from './components/FetchComponent';
function App() {
  const [user, setUser] = useState({})
  const[loggedin,setLoggedin]=useState(false);
  return (
    <div>

      {/* <Header></Header>
    <Register></Register>
    <Footer></Footer> */}
      
      <UserContext.Provider value={{ user:user,setUser: setUser,setLoggedin:setLoggedin }}>
        <Login></Login>
        {loggedin&&
        <Fetch></Fetch>
        }
        
      </UserContext.Provider>
    </div>

  );
}

export default App;
