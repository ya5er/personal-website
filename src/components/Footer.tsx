export function Footer() {

    return (
        <div className="mt-16 text-center flex justify-center gap-3">
                <a className="text-2xl mb-4 shadow-lg w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center sidebar-item" href="https://github.com/ya5er" target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="github" className="transition-transform hover:scale-110" width={25} height={25} />
                </a>
                <a className="text-2xl mb-4 shadow-lg w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center sidebar-item" href="https://www.linkedin.com/in/yaser-nossibeh/" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" className="transition-transform hover:scale-110" alt="linkedin" width={23} height={23} />
                </a>
                <a className="text-2xl mb-4 shadow-lg w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center sidebar-item" href="mailto:yrynossi@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                    <img src="/email.svg" className="transition-transform hover:scale-110" alt="email" width={27} height={21} />
                </a>
        </div>
    );

}