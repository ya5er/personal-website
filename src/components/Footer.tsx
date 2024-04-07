export function Footer() {

    return (
        <div className="mt-16 text-center">
            <div className="flex justify-center gap-2">
                <a className="text-2xl mb-4 shadow-xl w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center sidebar-item">
                    <img src="/github.svg" alt="github" className="transition-transform hover:scale-110" width={21.5} height={21.5} />
                </a>
                <a className="text-2xl mb-4 shadow-xl w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center sidebar-item">
                    <img src="/linkedin.svg" className="transition-transform hover:scale-110" alt="linkedin" width={20} height={20} />
                </a>
                <a className="text-2xl mb-4 shadow-xl w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center sidebar-item">
                    <img src="/email.svg" className="transition-transform hover:scale-110" alt="email" width={24} height={20} />
                </a>
            </div>
            {/* <h1 className="text-gray-400 text-md font-normal inter-subtitle">Designed & developed by Yaser Nossibeh</h1> */}
        </div>
    );

}