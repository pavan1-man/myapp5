//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
//import arc from './arc.jpg';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
function App() {
  return (
    <>
    <Sidebar /> <Products/>
    
    {/* <Users/> */}
    {/* <img src={arc} alt="mo preview"/> */}
    </>
  );
}

export default App;