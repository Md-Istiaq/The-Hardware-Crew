import React , {useState,useEffect} from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect( () =>{
        fetch('https://dry-shelf-78411.herokuapp.com/user' ,{
            method:'GET',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])

    const makeAdmin = email =>{
        fetch(`https://dry-shelf-78411.herokuapp.com/users/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then(res => res.json() )
          .then(data => {
              console.log(data)
              toast.success("successfully make admin")
          })
    }

    return (
        <div>
             <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            
                            <th>No:</th>
                            <th>E-mail</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map( (user,index) =>
                             <tr>
                               <th>{index+1}</th>
                               <td>{user.email}</td>
                               <td>{ user.role !== 'admin' && <button onClick={() =>makeAdmin(user.email)} className='btn  btn-primary uppercase bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary'>Make Admin</button>}</td>
                               <td></td>
                             </tr>
                           

                           )
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;