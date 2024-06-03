import React, {useState} from 'react'
import Logo from '../../assets/website/Logo.svg';
import DarkMode from './DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const MenuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about",
      },
      {
        id: 2,
        name: "Services",
        link: "/#services",
      },
      {
        id: 3,
        name: "Projects",
        link: "/#projects",
      },
]

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
      
  return (
    <>
        <nav className='duration-300 bg-white dark:bg-black dark:text-white'>
            <div className="container py-3 md:py-2">
                <div className="flex items-center justify-between">
                    {/* logo section */}
                    <div>
                        <a href="#" className='flex items-center gap-3'>
                            <img src={Logo} alt="logo" className='w-5'/>
                            <span className='text-2xl font-semibold sm:text-3xl'>
                                Digital Agency
                            </span>
                        </a>
                    </div>
                    {/*desktop navlinks section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {
                            MenuLinks.map(({id, name, link}) => {
                                    return(
                                    <li key={id} className='py-4 cursor-pointer'>
                                        <a href="#"
                                         className='py-2 text-lg font-medium transition-all duration-300 hover:text-primary hover:border-b-2 hover:border-primary'>
                                            {name}
                                        </a>
                                    </li>
                                    );
                                })
                            }
                            
                            <button className='primary-btn'>Get In Touch</button>
                            <DarkMode/>
                        </ul>
                    </div>
                    {/*mobile view*/}
                    <div className='flex items-center gap-4 md:hidden'>
                        <DarkMode/> 
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="transition-all cursor-pointer "
                                size={30}
                            />
                        ) : (
                        <HiMenuAlt3
                            onClick={toggleMenu}
                            className="transition-all cursor-pointer"
                            size={30}
                        />
                        )}
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar