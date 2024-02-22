import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const NotificationMsg = ({ msg, name, id }) => {
    return (
        <div className="flex flex-col border-b-2 p-2 notify-object">
            <div className="tracking-wide">{msg}</div>
            <div className="flex items-center text-lg tracking-wide font-semibold">
                <img src="../../../public/image/2.jpg" alt="img" className="h-12 w-12 rounded-full nav-img" />
                <div className="">{name}</div>
                <div className="flex items-center gap-1 ms-auto me-2 accept-reject-btns">
                    <div className="text-green-500 text-3xl"><TiTick /></div>
                    <div className="text-red-400 text-lg"><ImCross /></div>
                </div>
            </div>
        </div>
    )
}
export default NotificationMsg;