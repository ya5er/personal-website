export function About() {

    return (
        <div>
            <div className="shadow shadow-gray-300 w-full rounded-2xl mx-auto mt-14 px-4 bg-white border about flex flex-col justify-center items-center">
                <img className="drop-shadow-lg relative profile-pic object-cover" src="/profile.png" alt="profile" />
                <h1 className="text-5xl font-medium mt-6">Yaser Nossibeh</h1>
                <h1 className="text-gray-500 my-2 text-2xl font-normal">Software Developer</h1>
                <ul className="my-4 flex">
                    <li className="max-w-6"><a href="https://github.com/ya5er"><img src="/github.svg" alt="github" /></a></li>
                    <li className="max-w-6 mx-4"><a href="https://www.linkedin.com/in/yaser-nossibeh/"><img src="/linkedin.svg" alt="linkedin" /></a></li>
                    <li className="max-w-7"><a href="mailto:yrynossi@uwaterloo.ca"><img src="/email.svg" alt="email" /></a></li>
                </ul>
            </div>
            <div className="drop-shadow-lg w-full rounded-2xl mx-auto bg-gray-200 relative info"></div>
        </div>
    );

}