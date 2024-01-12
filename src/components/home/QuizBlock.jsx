import "../../styles/quiz.css"

const QuizBlock = ({ content }) => {
    return (
        <div className={`h-36 w-11/12 p-4 ${content.color} text-black dark:text-slate-700 shrink-0 flex justify-between rounded-md home-class-block lg:w-96 ${content.active ? "border-4 quiz-active" : ""}`} >
            <div className="flex flex-col h-full names">
                <div className="text-2xl tracking-widest font-bold class-name">{content.name}</div>
                <span className="text-xs mt-1 created-by">created by {"Prasenjit"}</span>
                <div className="text-lg mt-auto tracking-wider flex items-center gap-2 class-name">{content.class}</div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2 marks">
                <div className="text-lg font-medium">{content.marks}</div>
                <div className="text-xs tracking-widest">Marks</div>

            </div>

        </div>
    )
}
export default QuizBlock;