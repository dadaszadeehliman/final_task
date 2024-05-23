import axios from 'axios'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [getdata, setgetdata] = useState([])

    useEffect((data) => {
        axios.get('http://localhost:8000/alveer/', data)
            .then(res => setgetdata(res.data))
    }, [])

    return (
        <>
            <div className='Home_section_1 mt-5'>
                <div className='container row'>
                    <div className='col'>
                        <h1>Cloth & Wood Sofa</h1>
                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                    <div className='col'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" className='divan' alt="divan" />
                    </div>
                </div>
            </div>
            <div className='Home_section_2 container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="gfdg" />
                    </div>
                    <div className='col Home_section_2_1 '>
                        <h1>Weekly Sale on 60% Off All Products </h1>
                        <div className='row mt-4'>
                            <div className='col'>
                                <h5>DAYS</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col'>
                                <h5>Hours</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col'>
                                <h5>Minutes</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col'>
                                <h5>Seconds</h5>
                                <h3>-1751</h3>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <input type="text" className='form-control col' placeholder='enter email address' />
                            <div className='col-3'>
                                <a href="#" className='btn btn-primary'>Book now</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 container Home_section_3 '>
                        <div>
                            <div className='row'>
                                <div className='col-2'>
                                    <h2>Best Sellers </h2>
                                </div>
                                <h4 className='col-2 mt-3'>Shop</h4>
                            </div>
                            <div className='Home_section_3_next'>
                                <h4 className='font-weight-bold'>Next | Previous </h4>
                            </div>
                        </div>
                        <div className='row'>

                            {getdata.map(element => {
                                return (
                                    <div className='col-lg-3 col-md-6'>
                                        <div key={element.id}>
                                            <img src={element.img} alt="xfgfd" />
                                            <h2>{element.name}</h2>
                                            <span>{element.money}</span>
                                        </div>
                                    </div>)
                            })}

                        </div>
                    </div>


                </div>
            </div>
        </>


    )
}
