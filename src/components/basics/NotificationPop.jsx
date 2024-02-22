import { ImCross } from "react-icons/im";

import NotificationMsg from "./NotificationMsg";

const notiList = [{ type: "Collab Reqeust", name: "Jyoti" }, { type: "Collab Reqeust", name: "Chana" }, { type: "Collab Reqeust", name: "Saikat" }, { type: "Collab Reqeust", name: "Biman" }, { type: "Collab Reqeust", name: "Jyoti" }, { type: "Collab Reqeust", name: "Chana" }, { type: "Collab Reqeust", name: "Saikat" }]

const NotificationPop = ({ active, closePop }) => {
    return (
        <div className={`bg-slate-600 dark:bg-slate-100 h-screen w-screen bg-opacity-50 dark:bg-opacity-30 fixed top-0 left-0 flex justify-center items-center ${active ? "" : "hidden"} notification-area`}>
            <div className="bg-slate-200 dark:bg-slate-300 text-slate-800 h-3/5 w-4/5 lg:h-4/5 lg:w-1/4 border-2 border-slate-800 rounded-lg p-4 flex flex-col gap-4 notification-pop">
                <div className="text-4xl tracking-wide font-semibold border-b-2 border-slate-600 pb-3 flex justify-between">
                    <div>Notifications</div>
                    <div className="text-sm font-thin" onClick={() => { closePop() }}><ImCross /></div>
                </div>
                <div className="bg-slate-50 flex-grow flex flex-col overflow-scroll notification-lists">
                    {
                        notiList.map((ele, i) => {
                            return (
                                <NotificationMsg name={ele.name} key={i} msg={ele.type} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default NotificationPop;