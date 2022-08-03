import './App.css';
import Header from './components/Header';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import NavBar from './components/pages/Navbar';

function App() {
  return (
    <div className="">
        <Header />
        <NavBar/>
     </div> 
  );
}

export default App;
  