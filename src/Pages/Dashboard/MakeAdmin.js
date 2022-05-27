import React , {useState,useEffect} from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])
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
                               <td className='btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary'>Make Admin</td>
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