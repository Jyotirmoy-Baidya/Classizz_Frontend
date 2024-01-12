import { useEffect, useState } from "react";
import ClassBlock from "../components/home/ClassBlock";

import "../styles/home.css";
import { NavLink } from "react-router-dom";
import ToggleButton from "../components/basics/ToggleButton";
import ClassArea from "../components/home/ClassArea";
import QuizArea from "../components/home/QuizArea";

const own = [{ className: 'CSE1', classOwner: "Jyoti", color: `bg-pink-400`, noOfStudents: 23 }, { className: 'CSE2', classOwner: "Biman", color: "bg-teal-500", noOfStudents: 32 }, { className: 'CSE3', classOwner: "Bhalu", color: `bg-slate-400`, noOfStudents: 40 }, { className: 'CSE3', classOwner: "Bhalu", color: `bg-lime-500`, noOfStudents: 40 }, { className: 'CSE2', classOwner: "Biman", color: "bg-teal-500", noOfStudents: 32 },];

const inst = [{ className: 'ECE1', color: "bg-orange-100", classOwner: "SPD", noOfStudents: 67 }, { className: 'ECE2', color: "bg-green-300", classOwner: "Prasenjit Das", noOfStudents: 90 }];
const userName = "Jyotirmoy";

const quiz = [{ name: "Science Quiz", class: "CSE1", color: "bg-orange-100", active: true, marks: 20 }, { name: "Maths Quiz", class: "CSE3", color: `bg-teal-100`, active: true, marks: 30 }, { name: "Hindi Quiz", class: "CSE2", color: `bg-teal-500`, active: false, marks: 10 }]

const role = "teacher";


const Home = () => {
    const [type, setType] = useState(0);
    const ch = () => {
        console.log("ch");
        // setType(e);
    }
    return (
        <div className="bg-grey-200 dark:bg-slate-800 lg:flex lg:gap-2 max-h-home overflow-scroll lg:max-h-full grow home-page" >
            {/* desktop toggle  */}
            <div className="w-64 h-full hidden fixed left-0 lg:block lg:border-e-2">
                <div className="h-full w-full flex flex-col items-center p-6 gap-4 toggles">
                    {
                        role === "teacher" ?
                            <>
                                <ToggleButton text="Own" active={type === 0 ? true : false} onClick={() => setType(0)} />
                                <ToggleButton text="Institution" active={type == 1 ? true : false} onClick={() => setType(1)} />
                            </> :
                            <>
                                <ToggleButton text="Classes" active={type === 0 ? true : false} onClick={() => setType(0)} />
                                <ToggleButton text="Active Quiz" active={type == 1 ? true : false} onClick={() => setType(1)} />
                            </>
                    }
                </div>
            </div>
            <div className="lg:border-s-2 flex flex-col max-h-full lg:ms-64 overflow-scroll w-full class-blocks-home">
                <div className="lg:hidden block p-4 text-slate-800 dark:text-slate-300 italic welcome-msg">
                    <div className="text-xl">Welcome
                        <div className="p-1 tracking-wide text-4xl home-username">{userName}</div>
                    </div>
                </div>

                {/* Mobile Toggle  */}
                <div className="lg:hidden w-full tracking-widest p-4 pt-6 flex justify-evenly text-xl own-inst-toggle">
                    {
                        role === "teacher" ?
                            <>
                                <ToggleButton text="Own" active={type === 0 ? true : false} onClick={() => setType(0)} />
                                <ToggleButton text="Institution" active={type == 1 ? true : false} onClick={() => setType(1)} />
                            </> :
                            <>
                                <ToggleButton text="Classes" active={type === 0 ? true : false} onClick={() => setType(0)} />
                                <ToggleButton text="Active Quiz" active={type == 1 ? true : false} onClick={() => setType(1)} />
                            </>
                    }
                </div>

                {/* Class Block List  */}
                {
                    role === "teacher" ?
                        <>
                            {
                                type ? <ClassArea classArray={inst} /> : <ClassArea classArray={own} />
                            }
                        </> :
                        <>
                            {
                                type ? <QuizArea quizArray={quiz} /> : <ClassArea classArray={own} />
                            }
                        </>
                }
            </div>
        </div >
    )
}
export default Home;