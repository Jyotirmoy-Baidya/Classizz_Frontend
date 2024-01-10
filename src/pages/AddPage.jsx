import { useState } from "react";
import "../styles/add.css"
import ClassBlock from "../components/home/ClassBlock";
import { useParams } from "react-router-dom";

// const teacher = true;

const AddPage = ({ teacher, t }) => {
    const params = useParams();
    const [type, setType] = useState(t);
    const [color, setColor] = useState("");
    const [className, setClassName] = useState("");
    const [instCode, setInstCode] = useState(params?.code);
    const [classCode, setClassCode] = useState(params?.code);

    const setColorBorder = (e) => {
        const allColors = document.querySelectorAll(".color-selector");
        allColors.forEach((item) => item.classList.remove('active-color'));
        e.target.classList.add("active-color");
    }

    return (
        <div className="bg-grey-200 dark:bg-slate-800 lg:flex lg:gap-2 lg:relative max-h-home lg:max-h-full grow overflow-scroll hide-scroll">

            {/* Desktop toggle */}
            <div className="w-64 hidden lg:block lg:border-e-2 p-3">
                {
                    teacher ?
                        <div className="w-full tracking-widest p-4 pt-6 flex flex-col gap-6 justify-evenly text-xl own-inst-toggle">
                            {
                                type ?
                                    <>
                                        <button className="w-full p-2 dark:text-white font-thin rounded-3xl tracking-wider dark:tracking-widest" onClick={() => setType(0)}>Create Own Class</button>
                                        <button className="bg-yellow-300 w-full p-2 tracking-wider rounded-3xl" onClick={() => setType(1)}>Join An Institution</button>
                                    </> :
                                    <>
                                        <button className="bg-yellow-300 w-full p-2 tracking-wider rounded-3xl" onClick={() => setType(0)}>Create Own Class</button>
                                        <button className="w-full p-2 dark:text-white font-thin rounded-3xl tracking-wider dark:tracking-wider" onClick={() => setType(1)}>Join An Institution</button>
                                    </>
                            }
                        </div> :
                        <div className="w-full tracking-widest p-3 pt-6 flex justify-evenly text-xl">
                            <div className="bg-yellow-300 w-full p-2 tracking-wider rounded-3xl text-center">Join A Class</div>
                        </div>
                }
            </div>

            {/* mobile toggle  */}
            {
                teacher ?
                    <div className="lg:hidden w-full  tracking-widest p-4 pt-6 flex justify-evenly text-xl own-inst-toggle">
                        {
                            type ?
                                <>
                                    <button className="h-auto w-40 p-2 dark:text-white rounded-3xl tracking-wider dark:tracking-widest" onClick={() => setType(0)}>Create Own Class</button>
                                    <button className="bg-yellow-300 h-auto w-40 p-2 tracking-wider rounded-3xl" onClick={() => setType(1)}>Join An Institution</button>
                                </> :
                                <>
                                    <button className="bg-yellow-300 h-auto w-40 p-2 tracking-wider rounded-3xl" onClick={() => setType(0)}>Create Own Class</button>
                                    <button className="h-auto w-40 p-2 dark:text-white rounded-3xl tracking-wider dark:tracking-widest" onClick={() => setType(1)}>Join An Institution</button>
                                </>
                        }
                    </div> :
                    <div className="lg:hidden w-full tracking-widest p-4 pt-6 flex justify-evenly text-xl">
                        <div className="h-auto w-40 p-2 dark:text-white font-thin rounded-full tracking-wider dark:tracking-widest">Join A Class</div>
                    </div>
            }

            {/* Add Body */}
            <div className="flex justify-center lg:border-s-2 lg:w-1/2  max-h-full p-4 add-body">
                {
                    teacher ?
                        <>
                            {
                                !type ?
                                    <div className="flex flex-col gap-5 w-10/12">
                                        <form className="class-name">
                                            <div className="text-slate-950 dark:text-slate-300 text-lg tracking-widest py-2">Class name</div>
                                            <input className="bg-slate-100  border-2 dark:bg-slate-300 text-slate-900 p-2 uppercase h-12 w-full rounded-md" onChange={(e) => setClassName(e.target.value.toUpperCase())} value={className} />
                                        </form>
                                        <div className="choose-color">
                                            <div className="text-slate-950 dark:text-slate-300 text-lg tracking-widest py-2">Select A Color</div>
                                            <div className="grid grid-cols-5 gap-5">
                                                <div className="rounded-full h-10 w-10 bg-green-300 color-selector" onClick={(e) => { setColor("bg-green-300"); setColorBorder(e); }}></div>
                                                <div className="rounded-full h-10 w-10 bg-orange-100 color-selector" onClick={(e) => { setColor("bg-orange-100"); setColorBorder(e); }}></div>
                                                <div className="rounded-full h-10 w-10 bg-lime-500 color-selector" onClick={(e) => { setColor("bg-lime-500"); setColorBorder(e); }}></div>
                                                <div className="rounded-full h-10 w-10 bg-teal-500 color-selector" onClick={(e) => { setColor("bg-teal-500"); setColorBorder(e); }}></div>
                                                <div className="rounded-full h-10 w-10 bg-pink-400 color-selector" onClick={(e) => { setColor("bg-pink-300"); setColorBorder(e); }}></div>
                                                <div className="rounded-full h-10 w-10 bg-slate-400 color-selector" onClick={(e) => { setColor("bg-slate-400"); setColorBorder(e); }}></div>
                                            </div>
                                        </div>
                                        <button className="w-32 h-12 flex justify-center items-center bg-yellow-300 mx-auto rounded-lg tracking-wider font-normal">Create</button>
                                    </div>
                                    :
                                    <div className="flex flex-col gap-8 w-10/12">
                                        <form className="class-name">
                                            <div className="text-slate-950 dark:text-slate-300 text-lg tracking-widest py-2">Institute Code</div>
                                            <input className="bg-slate-100  border-2 dark:bg-slate-300 text-slate-900 p-2 uppercase h-12 w-full rounded-md" onChange={(e) => setInstCode(e.target.value.toUpperCase())} value={instCode || ""} />
                                        </form>
                                        <button className="h-12 w-40 flex justify-center items-center bg-yellow-300 mx-auto rounded-lg tracking-wider font-normal" onClick={() => console.log(instCode)}>Sent Request</button>
                                    </div>
                            }
                        </> :
                        <div className="flex flex-col gap-5 w-10/12">
                            <div className="class-name">
                                <div className="text-slate-950 dark:text-slate-300 text-lg tracking-widest py-2">Class Code</div>
                                <input className="bg-slate-100  border-2 dark:bg-slate-300 text-slate-900 p-2 uppercase h-12 w-full rounded-md" onChange={(e) => setClassCode(e.target.toUpperCase())} value={classCode} />
                            </div>
                            <div className="h-12 w-40 flex justify-center items-center bg-yellow-300 mx-auto rounded-lg tracking-wider font-normal">Join Class</div>
                        </div>
                }
            </div>

            {/* preview */}
            {
                teacher ?
                    <>
                        {
                            !type ?
                                <div className="lg:absolute lg:bottom-10 lg:right-10">
                                    <div className="text-slate-800 dark:text-slate-300 pt-6 ps-4 pe-6 text-xl">Preview</div>
                                    <div className="flex flex-col items-center pt-2">
                                        <ClassBlock content={{ classOwner: "Jb", className: className, color: color, noOfStudents: 0 }} />
                                    </div>
                                </div> :
                                <></>
                        }
                    </> : <></>
            }
        </div >
    )
}
export default AddPage;
