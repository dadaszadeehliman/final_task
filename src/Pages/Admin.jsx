import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

    return (
        <>
            <div className='container'>
                <Link to='/Add' className='btn btn-primary mt-5'>Add</Link>
            </div>

            <table className='mt-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>money</th>
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
