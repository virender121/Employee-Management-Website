import './App.css';
import Dashboard from './Page/Dashboard/index';
import Signin from './Signin';
import Signup from './Signup';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard/> }></Route>
      <Route path="/" element={<Signin/> }></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      </Routes> 
      </BrowserRouter>
      {/* <Dashboard/> */}
      
     
    </div>
  );
}

export default App;
