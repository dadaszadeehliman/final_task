import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
    return (
        <div className='navbar_bacgraundreng'>
            <div className='container'>
                <div className='Navbar_esas pt-5'>
                    <div className='Navbar_esas_logo'> <h2><img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="logo" /></h2></div>
                    <div className='Navbar_esas_lists'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Shop</Link></li>
                            <li><Link to='/'>Pages</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                            <li><Link to='/Admin'>Admin</Link></li>
                        </ul>
                    </div>
                    <div className='Navbar_esas_icons'>
                        <FaSearch />
                        <CiHeart />
                        <SlBasketLoaded />
                    </div>
                </div>
                <div className='Navbar_esas_reaponsivlik pt-5'>
                    <div><button className='btn'><IoMenuSharp /></button></div>
                    <div className='Navbar_esas_logo'> <h2><img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="logo" /></h2></div>
                    <div className='Navbar_esas_icons'>
                        <FaSearch />
                        <CiHeart />
                        <SlBasketLoaded />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar