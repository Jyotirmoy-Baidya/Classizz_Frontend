import QuizBlock from "./QuizBlock";

const QuizArea = ({ quizArray }) => {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:p-7 max-h-full overflow-scroll remove-scrollba w-full remove-scrollbar gap-5 pb-4 items-center quiz-list">
            {
                quizArray?.map((ele, i) => {
                    return (
                        <QuizBlock key={i} content={ele} />
                    )
                })
            }
        </div>
    )
}

export default QuizArea;