import { useState } from "react";
import { AiFillHdd, AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";

const Nav = () => {

    const [Open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/About', name: 'About', id: 2 },
        { path: '/Contact', name: 'Contact', id: 3 },
        { path: '*', name: 'Not-Found', id: 404 },
    ];



    return (
        <nav className=" text-black p-6 bg-yellow-600"> 
            <div className="text-4xl md:hidden" onClick={() => setOpen(!Open)}>
                {
                    Open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiFillHdd></AiFillHdd>
                }

            </div>
            <ul className={`
            "md:flex absolute bg-yellow-600 p-6 duration-5000 static"
            ${Open === true ? "top-24" : "-top-60"}
            `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;