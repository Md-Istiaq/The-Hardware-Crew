import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Parts/Purchase';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/part/:id' element={<Purchase/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
