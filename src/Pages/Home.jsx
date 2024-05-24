import axios from 'axios'
import { useState, useEffect } from 'react'

export const Home = () => {
    const [getdata, setgetdata] = useState([])

    useEffect((data) => {
        axios.get('http://localhost:8000/alveer/', data)
            .then(res => setgetdata(res.data))
    }, [getdata])

    return (
        <>
            <div className='Home_section_1 mt-5'>
                <div className='container row'>
                    <div className='col-lg-6'>
                        <h1>Cloth & Wood Sofa</h1>
                        <p>Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" className='divan' alt="divan" />
                    </div>
                </div>
            </div>
            <div className='Home_section_2 container mt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" alt="gfdg" />
                    </div>
                    <div className='col-lg-6 Home_section_2_1 '>
                        <h1>Weekly Sale on 60% Off All Products </h1>
                        <div className='row mt-4'>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>DAYS</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>Hours</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                <h5>Minutes</h5>
                                <h3>-1751</h3>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
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



                </div>
            </div>
            <div className='Home_section_3 mt-5 container  '>
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
                            <div className='col-lg-3 col-md-6 Home_section_3_data'>
                                <div key={element.id}>
                                    <div className='text-center'>
                                        <img src={element.img} alt="xfgfd" className='' />
                                    </div>
                                    <h2>{element.name}</h2>
                                    <p>{element.money}</p>
                                </div>
                            </div>)
                    })}
                </div>
            </div>

            <div className='Home_section_4 mt-5'>
                <div className='container-md'>
                    <h5>JOIN OUR NEWSLETTER</h5>
                    <h2>Subscribe to get Updated with new offers</h2>
                    <div className='row justify-center  Home_section_4_esas'>
                        <input type="text" className='form-control col' placeholder='Enter email ' />
                        <div className='col '>
                            <a href="#" className='btn btn-primary '>Subscribe now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Home_section_5 container'>
                <div className=' Home_section_5_esas'>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    <div className='col-lg-2'>
                        <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="fsdfsdf" />
                    </div>
                    

                </div>

            </div>
        </>


    )
}
