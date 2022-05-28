import React ,{useState,useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../_firebase.init'
import useAdmin from '../../hooks/useAdmin'
const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h2 className='text-2xl'>welcome to your Dashboard</h2>
      <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
  
      { user && <li><Link to="/dashboard">My Orders</Link></li>}
      <li><Link to="/dashboard/addreview">Add a Review</Link></li>
      { admin && <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>}
      { admin && <li><Link to="/dashboard/manageorder">Manage All Order</Link></li>}
      <li><Link to="/dashboard/myprofile">My Profile</Link></li>
      { admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
      { admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>}

     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;