import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { IoAddCircleOutline, IoAddCircle } from "react-icons/io5";

const user = "teacher";

const Navs = () => {
    const location = useLocation();

    const [active, setActive] = useState(0);

    const setting = () => {
        if (location.pathname === "/") { setActive(0); }
        else if (/addClass/.test(location.pathname)) { setActive(1); }
        else if (location.pathname == "/profile") { setActive(2) }
        else { setActive(0) }


    }
    useEffect(() => {
        setting();
        console.log(location);
    }, [location]);

    return (
        <>
            <div className="lg:hidden bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-200 w-full h-n flex justify-around items-center text-2xl navbar-mobile">
                <NavLink className=" home-btn" to="/">
                    {
                        active == 0 ?
                            <IoHomeSharp /> :
                            <IoHomeOutline />
                    }
                </NavLink>
                <NavLink className="text-3xl add-btn" to={`/addClass/${user}`}>
                    {
                        active == 1 ?
                            <IoAddCircle /> :
                            <IoAddCircleOutline />
                    }
                </NavLink>
                <NavLink className="profile-btn" to="/profile">
                    {
                        active == 2 ?
                            <><img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 border-green-400 border-2 rounded-full nav-img" /></> :
                            <><img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 rounded-full nav-img" /></>
                    }
                </NavLink>
            </div>
        </>
    )
}



export default Navs;