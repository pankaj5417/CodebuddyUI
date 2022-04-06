import './App.css';
//import {Route,Routes} from "react-router-dom"
 import { Navbar } from './components/Navbar';
 import { Searchbar } from './components/Searchbar';
 import { Slide } from './components/Slide';

export const App=()=> {
  return (
    <div className="bing-container">
     This is app
     <Navbar className="navbar-container" />
     <Searchbar className="searchbar-container"/>
     <div className='slide-container'>
     <Slide/> 

     </div>
    </div>
  );
}


