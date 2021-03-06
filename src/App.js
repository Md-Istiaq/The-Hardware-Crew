import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Parts/Purchase';
import Login from './Pages/Login/Login';
import SignUp from '../src/Pages/SignUp/SignUp'
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs';
import PageNotFound from './Pages/PageNotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequirAuth from './Pages/Login/RequirAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Addreview from './Pages/Dashboard/Addreview';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import MyProfile from './Pages/Dashboard/MyProfile'
import ManageProduct from './Pages/Dashboard/ManageProduct'
import Payment from './Pages/Dashboard/Payment';
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/myportfolio' element={<MyPortfolio/>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/part/:id' element={
         <RequirAuth>
           <Purchase/>
         </RequirAuth>
       }></Route>
             <Route path='/dashboard' element={
        <RequirAuth>
          <Dashboard/>
        </RequirAuth>
      }>
                <Route index element={<MyOrders/>} />
        <Route path='addreview' element={ <Addreview/>} />
        <Route path='addproduct' element={<AddProduct/>}></Route>
        <Route path='makeadmin' element={<MakeAdmin/>}></Route>
        <Route path='manageorder' element={<ManageAllOrder/>}></Route>
        <Route path='myprofile' element={<MyProfile/>}></Route>
        <Route path='manageproduct' element={<ManageProduct/>}></Route>
        <Route path='payment/:id' element={<Payment/>}></Route>
      </Route>
       <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
