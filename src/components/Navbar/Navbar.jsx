import React from 'react'
import Logo from '../../assets/website/Logo.svg';
import DarkMode from './DarkMode';

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
  return (
    <>
        <nav className='bg-white dark:bg-black dark:text-white'>
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
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar