import { useEffect, useState } from "react";
import ClassBlock from "../components/home/ClassBlock";

import "../styles/home.css";
import { NavLink } from "react-router-dom";

const own = [{ className: 'CSE1', classOwner: "Jyoti", color: `bg-pink-400`, noOfStudents: 23 }, { className: 'CSE2', classOwner: "Biman", color: "bg-teal-500", noOfStudents: 32 }, { className: 'CSE3', classOwner: "Bhalu", color: `bg-slate-400`, noOfStudents: 40 }, { className: 'CSE3', classOwner: "Bhalu", color: `bg-lime-500`, noOfStudents: 40 }, { className: 'CSE2', classOwner: "Biman", color: "bg-teal-500", noOfStudents: 32 },];
const inst = [{ className: 'ECE1', color: "bg-orange-100", classOwner: "SPD", noOfStudents: 67 }, { className: 'ECE2', color: "bg-green-300", classOwner: "Prasenjit Das", noOfStudents: 90 }];
const userName = "Jyotirmoy";


const Home = () => {
    const [type, setType] = useState(0);
    return (
        <div className="bg-grey-200 dark:bg-slate-800 lg:flex lg:gap-2 max-h-home lg:max-h-full grow" >
            {/* desktop toggle  */}
            <div className="w-64 hidden lg:block lg:border-e-2">

            </div>

            <div className="lg:border-s-2 flex flex-col max-h-full class-blocks-home">


                <div className="p-4 text-slate-800 dark:text-slate-300 italic welcome-msg">
                    <div className="text-xl">Welcome
                        <div className="p-1 tracking-wide text-4xl home-username">{userName}</div>
                    </div>
                </div>

                {/* Mobile Toggle  */}
                <div className="lg:hidden w-full  tracking-widest p-4 pt-6 flex justify-evenly text-xl own-inst-toggle">
                    {
                        type ?
                            <>
                                <button className="h-10 w-40 dark:text-white rounded-full tracking-wider dark:tracking-widest" onClick={() => setType(0)}>Own</button>
                                <button className="bg-yellow-300 h-10 w-40 tracking-wider rounded-full" onClick={() => setType(1)}>Institution</button>
                            </> :
                            <>
                                <button className="bg-yellow-300 h-10 w-40 tracking-wider rounded-full" onClick={() => setType(0)}>Own</button>
                                <button className="h-10 w-40 dark:text-white rounded-full tracking-wider dark:tracking-widest" onClick={() => setType(1)}>Institution</button>
                            </>
                    }
                    <div>
                        <NavLink to="/"></NavLink>
                    </div>
                </div>

                {/* Class Block List  */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:p-7 max-h-full overflow-scroll gap-5 pb-4 items-center class-list">
                    {
                        type ?
                            <>
                                {
                                    inst.map((ele, i) => {
                                        return (
                                            <ClassBlock key={i} content={ele} />
                                        )
                                    })
                                }
                            </> :
                            <>
                                {
                                    own.map((ele, i) => {
                                        return (
                                            <ClassBlock key={i} content={ele} />
                                        )
                                    })
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;