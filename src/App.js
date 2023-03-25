import { Route, Routes, Link,} from 'react-router-dom';
// import React from 'react';
import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Proses from './pages/Proses';

  function App() {
  const [navbar, setNavbar] = React.useState('list')
  
  function hamburgerMenu() {
    if(navbar === 'list') {
      setNavbar('nav-menu')
    } else {
      setNavbar('list')
    }
  }
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">
          <h1>Batu <span>Bata</span></h1>
        </div>
        {/* <div className="hamburger" onClick={hamburgerMenu}>🌟</div> */}
        <div className="hamburger" onClick={hamburgerMenu}>
          <input type="checkbox"/>
            <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
            </svg>
        </div>
        <div className={navbar}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/proses'>Proses</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='proses' element={<Proses />}/>
      </Routes>
    </div>
  );
}

export default App;
