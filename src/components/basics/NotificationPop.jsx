import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const notiList = [{ type: "Collab Reqeust", name: "Jyoti" }, { type: "Collab Reqeust", name: "Chana" }, { type: "Collab Reqeust", name: "Saikat" }, { type: "Collab Reqeust", name: "Biman" }]

const NotificationPop = ({ active }) => {
    return (
        <div className={`bg-slate-600 dark:bg-slate-100 h-screen w-screen bg-opacity-50 dark:bg-opacity-15 fixed top-0 left-0 flex justify-center items-center ${active ? "" : "hidden"} notification-area`}>
            <div className="bg-slate-200 dark:bg-slate-300 text-slate-800 h-3/5 w-4/5 lg:w-1/4 border-4 border-slate-800 rounded-lg p-4 flex flex-col gap-4 notification-pop">
                <div className="text-4xl tracking-wide font-semibold border-b-2 border-slate-600 pb-3 ">Notifications</div>
                <div className="bg-slate-50 flex-grow notification-lists">
                    {
                        notiList.map((ele, i) => {
                            return (
                                <div key={i} className="flex flex-col border-b-2 p-2 notify-object">
                                    <div className="tracking-wide">Collab Request</div>
                                    <div className="flex items-center text-lg tracking-wide font-semibold">
                                        <img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 rounded-full nav-img" />
                                        <div className="">Jyoti</div>
                                        <div className="flex items-center gap-1 ms-auto me-2 accept-reject-btns">
                                            <div className="text-green-500 text-3xl"><TiTick /></div>
                                            <div className="text-red-400 text-lg"><ImCross /></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default NotificationPop;