//React
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//Components
import Sidebar from "./components/Sidebar";

//Pages
import TQF7_0 from './pages/TQF7_0';
import TQF7_1 from './pages/TQF7_1';
import TQF7_2 from './pages/TQF7_2';
import TQF7_3 from './pages/TQF7_3';

import Home from './pages/Home';



function App() {
  return (
    <div className= "main">
      <Sidebar/>
       <Router>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tqf.7_0" element={<TQF7_0/>} />
            <Route path="/tqf.7_1" element={<TQF7_1/>} />
            <Route path="/tqf.7_2" element={<TQF7_2/>} />
            <Route path="/tqf.7_3" element={<TQF7_3/>} />
         </Routes>
       </Router>
      </div>
  );
}

export default App;
