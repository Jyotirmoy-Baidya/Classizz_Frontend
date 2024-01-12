import ClassBlock from "./ClassBlock"

const ClassArea = ({ classArray }) => {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:p-7 max-h-full overflow-scroll gap-5 pb-4 items-center remove-scrollbar class-list">
            {
                classArray?.map((ele, i) => {
                    return (
                        <ClassBlock key={i} content={ele} />
                    )
                })
            }
        </div>
    )
}

export default ClassArea;