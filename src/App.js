import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <div className='bg-primary'>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </div>

  );
}

export default App;
