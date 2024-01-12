const ToggleButton = ({ text, active }) => {
    return (
        <button className={active ? "bg-yellow-300 h-10 w-40 tracking-wider rounded-full" : "h-10 w-40 dark:text-white rounded-full tracking-wider dark:tracking-widest"}>
            {text}
        </button >
    )
}

export default ToggleButton;