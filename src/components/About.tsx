export function About() {

    return (
        <div>
            <div id="about" className="scroll-mt-36 shadow shadow-gray-300 w-full rounded-2xl mx-auto mt-16 px-4 bg-white border about flex flex-col justify-center items-center">
                <img className="drop-shadow-xl relative profile-pic object-cover transition-transform hover:scale-105" src="/profile.png" alt="profile" />
                <h1 className="text-5xl font-medium mt-6 inter-name">Yaser Nossibeh</h1>
                <h1 className="text-slate-600 my-2 text-2xl font-normal inter-subtitle">Software Developer</h1>
                <ul className="my-4 flex gap-4">
                    <li><a href="https://github.com/ya5er" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="github" className="transition-transform hover:scale-110" width={26.5} height={26.5} /></a></li>
                    <li><a href="https://www.linkedin.com/in/yaser-nossibeh/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.svg" className="transition-transform hover:scale-110" alt="linkedin" width={25} height={25} /></a></li>
                    <li><a href="mailto:yrynossi@uwaterloo.ca" target="_blank" rel="noopener noreferrer"><img src="/email.svg" className="transition-transform hover:scale-110" alt="email" width={29} height={25} /></a></li>
                </ul>
            </div>
            <div className="drop-shadow-lg w-full rounded-2xl mx-auto bg-gray-100 relative info text-start py-7 px-12 transition-transform">
                <h2 className="text-black text-2xl font-medium inter-header">Hey, I'm Yaser &#128075;</h2>
                <p className="mt-2 text-gray-700 inter-body">
                    &#128218; 2nd year Computer Science student @ <span className="font-medium">University of Waterloo</span><br />
                    &#128187; Prev. Software Developer @ <span className="font-medium">Inbenta</span>, <span className="font-medium">Rogers</span><br />
                    &#127947; Gym and sports enthusiast<br />
                    &#128248; Nature enjoyer and (very) casual photographer
                </p>
            </div>
        </div>
    );

}