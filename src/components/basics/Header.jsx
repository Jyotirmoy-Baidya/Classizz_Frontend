import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";


import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import NotificationPop from "./NotificationPop";
// import "../../styles/basic.css"

const Header = () => {
    const location = useLocation();
    console.log(location);

    const [notification, setNotification] = useState(false);

    const closeNotification = () => {
        setNotification(false);
    }

    return (
        <div className="flex items-center justify-between bg-teal-100 dark:bg-slate-800 text-slate-900 dark:text-teal-50 p-4 border-b-2 border-slate-900 dark:border-slate-200 sm:h-r lg:h-auto header">
            <div className="text-4xl tracking-wider title">Classizz</div>
            <div className="flex items-center gap-4">
                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>
                <div className="text-2xl p-2 relative notification-btn" onClick={() => setNotification(true)}><FaRegBell />
                    <div className="absolute top-0 right-1 text-sm font-bold text-red-600 notification-count">3</div>
                </div>
                <NavLink className="hidden lg:block header-profile" to="/profile">
                    {
                        location.pathname == '/profile' ?
                            <><img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 border-green-400 border-2 rounded-full nav-img" /></> :
                            <><img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 rounded-full nav-img" /></>
                    }
                </NavLink>
            </div>
            <NotificationPop active={notification} closePop={closeNotification} />
        </div>
    )
}

export default Header;