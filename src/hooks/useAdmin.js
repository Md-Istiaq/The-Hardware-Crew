import {useState , useEffect} from 'react'
const useAdmin = user =>{
    const [admin , setAdmin] = useState(false)
    const [adminLoading , setAdminLoading] = useState(true)
    useEffect( () =>{
        const email = user?.email
        fetch(`https://dry-shelf-78411.herokuapp.com/admin/${email}` ,{
            method:"GET",
            headers:{
                'content-type':'application/json',
                authorization :`bearer ${localStorage.getItem('accessToken')}`
            },

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAdmin(data.admin)
           setAdminLoading(false)
        })

    } , [user])
    return [admin , adminLoading]
}
export default useAdmin