import { MdGroups3 } from "react-icons/md";

const ClassBlock = ({ content }) => {
    return (
        <div className={`h-36 w-11/12 p-6 ${content.color} text-black dark:text-slate-700 shrink-0 flex justify-between rounded-md home-class-block lg:w-96`} >
            <div className="flex flex-col justify-between h-full names">
                <div className="text-2xl tracking-widest font-bold class-name">{content.className}</div>
                <div className="text-lg tracking-wider owner-name">{content.classOwner}</div>
            </div>
            <div className="text-xl flex flex-col items-center gap-2 stundent-count">
                <div className="text-4xl text-slate-700" ><MdGroups3 /></div>
                <div className="font-medium tracking-wider">{content.noOfStudents}</div>
            </div>
        </div >
    )
}
export default ClassBlock;

