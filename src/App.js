import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from './sections/index';
import {Home, About, Services} from "./Pages/index"

function App() {
  return (
    <>
        <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
