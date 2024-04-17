interface Experience {
    org: string;
    title: string;
    date: string;
    description: string;
    skills: string[];
    logo: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {

    return (
        <div className="drop-shadow w-full rounded-2xl mx-auto bg-white py-6 px-8 flex items-center mb-6 transition experienceCard">
            <img className="rounded-xl max-w-24 max-h-24" src={experience.logo} alt={experience.org} />
            <div className="ml-5 text-left">
                <h2 className="text-2xl font-bold inter-header">{experience.org}</h2>
                <p className="text-gray-600 inter-subtitle">{experience.title} <span className="text-gray-500 inter-body">&#8226;</span> {experience.date}</p>
                <p className="text-gray-600 text-sm my-1 inter-body">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                        <p key={index} className={`text-gray-700 bg-gray-200 rounded-3xl px-2 py-1 text-xs inter-subtitle transition hover:scale-105`}>{skill}</p>
                    ))}
            </div>
            </div>
        </div>
    );

}