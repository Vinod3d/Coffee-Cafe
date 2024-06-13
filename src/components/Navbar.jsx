import logo from '../assets/website/coffee_logo.png'
import { FaCoffee } from "react-icons/fa";

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
            <div className="flex justify-between items-center">
                <div className=''>
                    <a 
                        href="#"
                        className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive whitespace-nowrap'
                    >
                        <img src={logo} alt="Logo" className='w-14' />
                        Coffee Cafe
                    </a>
                </div>

                <div className="flex justify-between items-center gap-4">
                    <ul className="hidden sm:flex items-center gap-4">
                        {Menu.map((menu, index)=>(
                            <li key={index}>
                                <a href={menu.link} className='inline-block text-lg py-4 px-2 text-white/70 hover:text-white duration-200'>
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className=' bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3'>
                        Order
                        <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
      
export default Navbar