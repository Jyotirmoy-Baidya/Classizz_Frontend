import { useState } from "react";
import ToggleButton from "../components/basics/ToggleButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const createUserURL = "https://classizz-backend.onrender.com"
// ${ createUserURL } /student/createstudent

const AddRolePage = ({ email, username, checkUser }) => {
    const [type, setType] = useState(3);
    const [name, setName] = useState(username);
    const navigate = useNavigate();
    const createUser = async () => {
        try {
            if (type != 0 && type != 1) {
                alert("Please Select Your Role");
                console.log(type);
            }
            else {
                if (type == 0) {
                    const a = await axios.post(`${createUserURL}/student/createstudent`, JSON.stringify({
                        email: email,
                        name: name
                    }), {
                        headers: { "Content-type": "application/json" },
                        withCredentials: true,
                    });
                    console.log(a);
                }
                else {
                    const a = await axios.post(`${createUserURL}/teacher/createteacher`, JSON.stringify({
                        email: email,
                        name: name
                    }), {
                        headers: { "Content-type": "application/json" },
                        withCredentials: true,
                    });
                    console.log(a);
                }
                checkUser();
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-slate-800 flex items-center justify-center grow h-full">
            <div className="bg-slate-200 p-10 flex flex-col gap-5 w-11/12 max-w-96 rounded-md add-role-section">
                <div>
                    <div className="text-lg mb-1 tracking-widest">Your UserName</div>
                    <div className="bg-slate-100 border-2  text-slate-900 flex items-center px-3 h-12 w-full rounded-md">{username}</div>
                </div>
                <div>

                    <div className="text-lg mb-1 tracking-widest">Your Email</div>
                    <div className="bg-slate-100  border-2 text-slate-900 flex items-center px-3 h-12 w-full rounded-md">{email}</div>
                </div>
                <div className="flex select-role">
                    <div className="text-xs">Want to continue as?</div>
                    <ToggleButton text="Student" active={type === 0 ? true : false} onClick={() => setType(0)} />
                    <ToggleButton text="Teacher" active={type == 1 ? true : false} onClick={() => setType(1)} />
                </div>
                <div className="mx-auto bg-green-500 tracking-wider font-medium shadow-md hover:bg-green-800 cursor-pointer py-2 px-5 rounded-md text-green-200 login" onClick={() => { createUser() }}>Login</div>
            </div>
        </div>
    )
}
export default AddRolePage;