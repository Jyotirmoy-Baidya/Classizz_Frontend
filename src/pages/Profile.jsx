const username = "Jyotirmoy"
const email = "jb@gmail.com"
const role = 'teacher'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { useClerk } from "@clerk/clerk-react"

import { useNavigate } from "react-router-dom"
const Profile = () => {
    const { signOut } = useClerk();
    const navigate = useNavigate();
    return (
        <div className="bg-grey-200 dark:bg-slate-800 max-h-home lg:max-h-full grow">
            <div className="border-2 border-slate-950 p-1 rounded-md bg-yellow-300 text-slate-800 absolute right-0 ms-auto">
                <div className="" onClick={() => { signOut(() => navigate("/")) }}>signout</div>
            </div>
            <div className="flex p-9 gap-5 border-b-2 profile-details">
                <figure className="w-1/2 flex justify-center items-center mt-3 grow">
                    <img src="./public/image/2.jpg" className="border-2 rounded-full" alt="Me" />
                </figure>
                <div className="h-4/12 w-1/2 flex flex-col justify-evenly gap-3 text-sm text-slate-900 dark:text-slate-100 tracking-widest">

                    <div className="profile-name">
                        <p className="m-1">Name</p>
                        <p className="text-xm bg-slate-200  dark:text-slate-900 w-full rounded-md p-2">{username}</p>
                    </div>
                    <div className="profile-email">
                        <p className="m-1">Email</p>
                        <p className="text-xm bg-slate-200 dark:text-slate-900 w-full rounded-md p-2">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;