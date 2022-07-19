//import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import LandingPage from './components/landing';
import Home from './components/home';
import "./components/cards.css";

import Details from "./components/details";
import CreateVg from "./components/Createvg";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element= {<LandingPage/>}></Route>
    <Route exact path= '/home' element={<Home/>}></Route>
    <Route path='/videogames' element={<CreateVg/>}></Route>
    <Route exact path= '/videogame/:id' element={<Details/>}></Route>
    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
