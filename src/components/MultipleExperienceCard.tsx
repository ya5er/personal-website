interface MultipleExperience {
    org: string;
    logo: string;
    positions: Position[]
    skills: string[];
}

interface Position {
    title: string;
    date: string;
    description: string;
}

interface MultipleExperienceCardProps {
    experience: MultipleExperience;
}

export function MultipleExperienceCard({ experience }: MultipleExperienceCardProps) {

    return (
        <div className="drop-shadow w-full rounded-2xl mx-auto bg-white py-7 px-8 flex items-top mb-6 experienceCard">
            <img className="rounded-xl max-w-24 max-h-24 transition hover:scale-105 mt-2" src={experience.logo} alt={experience.org} />
            <div className="ml-5 text-left">
                <h2 className="text-2xl font-bold inter-header">{experience.org}</h2>
                <div className="relative mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
                    <div className="ml-4">
                        {experience.positions.map((exp, index) => (
                            <div key={index} className="my-2">
                                <p className="text-gray-500 inter-subtitle">{exp.title} <span className="text-gray-400 inter-body">&#8226;</span> {exp.date}</p>
                                <p className="text-gray-500 text-sm mt-1 mb-2 inter-body">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, index) => (
                        <p key={index} className={`text-gray-600 bg-gray-200 rounded-3xl px-2 py-1 text-xs inter-subtitle transition hover:scale-105`}>{skill}</p>
                    ))}
            </div>
            </div>
        </div>
    );

}