import React , {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    const [part,setPart] = useState({})

    useEffect( () =>{
        fetch(`Parts.json/part/${id}`)
        .then(res => res.json())
        .then(data => setPart(data))
    },[])
    return (
        <div>
            <h1>{part.name}</h1>
        </div>
    );
};

export default Purchase;