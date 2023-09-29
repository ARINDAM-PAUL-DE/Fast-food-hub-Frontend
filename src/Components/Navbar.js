import React from 'react'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';


const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link>
        <img src={logo} alt='logo-img' width={180} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-x-6'>
                <li>
                    <Link to = '/' className='hover:text-blue-500'>Home</Link>
                </li>
                <li>
                    <Link to = '/about' className='hover:text-blue-500'>About us</Link>
                </li>
                <li>
                    <Link to = '/menu' className='hover:text-blue-500'>Menu</Link>
                </li>
            </ul>
        </nav>

    <div className='flex items-center gap-x-2 cursor-pointer'>
        { !isLoggedIn &&
            <Link to = '/login'>
                <button
                className='py-[8px] px-[12px] rounded-[8px] border border-blue-500 shadow-sm
                hover:shadow-blue-500/50 cursor-pointer'
                >Login</button>
            </Link>
        }  
        { !isLoggedIn &&
            <Link to = '/signup'>
                <button
                className='py-[8px] px-[12px] rounded-[8px] border
                 border-blue-500 shadow-sm hover:shadow-blue-500/50 cursor-pointer'
                >Sign up</button>
            </Link>
        }
        {  isLoggedIn &&
            <Link to = '/'>
                <button
                onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}
                className='py-[8px] px-[12px] rounded-[8px] border
                 border-blue-500 shadow-sm hover:shadow-blue-500/50 cursor-pointer'
                >Log Out</button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to = '/menu'>
                <button
                className='py-[8px] px-[12px] rounded-[8px] border
                 border-blue-500 shadow-sm hover:shadow-blue-500/50 cursor-pointer'
                >Dashboard</button>
            </Link>
        }
    </div>
    </div>
  )
}

export default Navbar