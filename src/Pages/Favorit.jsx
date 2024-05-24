import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Favorit = () => {
    const [favorit, setfavorit] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/favorits/')
            .then(res => setfavorit(res.data))

    }, [])

    const getDeletefavorits = (id) => {
        axios.delete('http://localhost:8000/favorits/' + id)

    }

    return (
        <> 
        <div className=''>
             <Link to='/Admin' className='btn btn-primary mt-5'>Geri</Link>
        </div>
          
            <table className='mt-5'>
                <thead>
                    <tr>
                        <th className='basliq' colSpan={5}>Favoritler Seyfesi</th>
                    </tr>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>money</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {favorit.map(elemet => {
                        return (
                            <tr key={elemet.id}>
                                <td>{elemet.id}</td>
                                <td><img src={elemet.img} alt="" className='datagetiimg' /></td>
                                <td>{elemet.name}</td>
                                <td>{elemet.money}</td>
                                <td><button onClick={() => getDeletefavorits(elemet.id)} className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>

    )
}

