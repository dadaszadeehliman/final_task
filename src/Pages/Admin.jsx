import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";


export const Admin = () => {
    const [dataget, setdataget] = useState([])

    useEffect((data) => {
        fetch('http://localhost:8000/alveer/', data)
            .then(res => res.json())
            .then(dataget => setdataget(dataget))
    }, []);

    const deletegeetchange = function (ids) {
        axios.delete('http://localhost:8000/alveer/' + ids)
    }

    const addFavorits=(id)=>{
        axios.get('http://localhost:8000/alveer/'+id).then(
            res=>axios.post('http://localhost:8000/favorits/', res.data)
        )
    }

    return (
        <>
            <div className='container'>
                <Link to='/Add' className='btn btn-primary mt-5'>Add</Link>
                <Link to='/Favorit' className='btn btn-primary mt-5'>Favorit</Link>
            </div>

            <div>
                <input type="text" placeholder='Search' />
            </div>

            <table className='mt-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>money</th>
                        <th>Favoritlere ekle</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dataget.map(elemet => {
                        return (
                            <tr key={elemet.id}>
                                <td>{elemet.id}</td>
                                <td><img src={elemet.img} alt="" className='datagetiimg' /></td>
                                <td>{elemet.name}</td>
                                <td>{elemet.money}</td>
                                <td><button className='btn btn-primary p-3' onClick={()=>addFavorits(elemet.id)} ><FcLike  style={{fontSize:'30px'}}/></button></td>
                                <td>
                                    <Link to={'/Edit/'+elemet.id}><button className='btn btn-primary'>Edit</button></Link></td>
                                <td><button onClick={() => deletegeetchange(elemet.id)} className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
