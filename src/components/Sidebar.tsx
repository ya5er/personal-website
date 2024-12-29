export function Sidebar() {
    return (
        <div className="fixed ml-4 top-1/2 transform -translate-y-1/2 items-center justify-center bg-white rounded-full drop-shadow-md sidebar">
            <a href="#about" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#128075;</a>
            <a href="#gallery" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#128248;</a>
            <a href="#education" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#128218;</a>
            <a href="#experience" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#128188;</a>
            <a href="#community" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#127758;</a>
            <a href="#projects" className="text-2xl my-1 w-12 h-12 flex items-center justify-center sidebar-item">&#128187;</a>
        </div>
    );
}


