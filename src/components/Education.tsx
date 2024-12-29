export function Education() {

    return (
        <div className="scroll-mt-8 education mx-auto" id="education">
            <h1 className="mb-10 text-3xl text-left font-medium">&#128218; <span className="underline decoration-2 underline-offset-2">Education</span></h1>
            <div className="drop-shadow w-full rounded-2xl mx-auto bg-white py-6 px-9 flex items-center transition experienceCard">
                <img className="rounded-xl max-w-24 max-h-24 transition hover:scale-105transition hover:scale-105" src="/resume/uwmath.jpeg" alt="UWaterloo" />
                <div className="ml-5 text-left">
                    <h2 className="text-2xl font-medium inter-header">University of Waterloo</h2>
                    <p className="text-gray-500 inter-subtitle">Bachelor of Computer Science <span className="text-gray-400 inter-body">&#8226;</span> Sept 2022 - Present</p>
                    <p className="text-gray-500 text-sm mt-1 inter-body">Object-Oriented Programming, Data Structures, Algorithms, Operating Systems, Statistics, Computer Architecture, Compilers, Combinatorics</p>
                </div>
            </div>
        </div>
    );

}