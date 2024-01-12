const ToggleButton = ({ text, active, onClick }) => {
    return (
        <button className={active ? "bg-yellow-300 h-10 w-40 tracking-wider rounded-full" : "h-10 w-40 dark:text-white rounded-full tracking-wider dark:tracking-widest"} onClick={(e) => { onClick(); e.preventDefault(); }}>
            {text}
        </button >
    )
}

export default ToggleButton;