import { useState } from 'react';
 import { Link } from 'react-router-dom';
import { styles  } from '../styles';
import  { NavLinks } from '../constants';
import { logo, menu, close } from '../assets';
import useScrollPosition from './useScrollPosition';



const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const { isAtTop } = useScrollPosition()

  return (
    <nav className={`${styles.paddingX}  ${isAtTop ? 'bg-gradient-to-b from-[#050816] ...' : 'bg-primary border-b border-gray-900'} w-full flex items-center py-5 fixed top-0 z-20  `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
         <Link 
          to='/' 
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
         >
         <img src={logo}  alt="logo"
          className='w-100 h-8 object-contain'/> 
          {/* <p className="flex gap-1 text-white text-[18px] font-bold cursor-pointer">Juliet<span className='sm:block hidden'>Sawyerr</span></p> */}
          {/* <p className='text-white text-[25px] font-bold cursor-pointer flex '>
            Juliet &nbsp;
            <span className='font-extralight'> Sawyerr</span>
          </p> */}
         </Link>
         <ul className="list-none hidden sm:flex flex-row gap-10">
          {NavLinks.map(link => (
            <li key={link.id}
            className={`${
              active === link.title ? 'text-white' : 'text-secondary hover:text-white  cursor-pointer'} text-[16px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
         </ul>

         {/* MOBILE NAVIGATION */}
         <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt='menu'
          className='w-[20px] h-[20px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)} /> 

          <div className={`${toggle ?  'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className="list-none flex flex-col gap-4 justify-end items-start">
          {NavLinks.map(link => (
            <li key={link.id}
            className={`${
              active === link.title ? 'text-white' : 'text-secondary hover:text-white  cursor-pointer'} font-poppins font-medium text-[16px] cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle)
            }}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
         </ul>
          </div>
          </div>

      </div>
    </nav>
  )
}

export default Navbar