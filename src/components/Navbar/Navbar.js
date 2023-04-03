import { useState } from "react";
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' }
    ];


    return (
        <nav className='bg-purple-500'>

            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <XMarkIcon className="h-7 w-7 text-yellow-300" /> : <Bars3Icon className="h-7 w-7 text-yellow-300" />}</span>

            </div>

            <ul className={`md:flex absolute duration-500 md:static bg-purple-500 ${open ? 'top-6' : '-top-40'} pl-8 py-2 pb-4 rounded `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;