interface Project {
    name: string;
    description: string;
    skills: string[];
    image: string;
    colour: string;
    repo: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {

    return (
        <div className="rounded-xl mx-auto bg-white p-6 items-center text-left mb-2 projectCard">
            <a href={project.repo} target="_blank" rel="noopener noreferrer"><img className={`object-cover shadow-md rounded-xl w-full h-44 transition hover:scale-105`} src={project.image} alt={project.name} /></a>
            <h2 className="mt-4 text-xl font-bold inter-header">{project.name}</h2>
            <p className="text-gray-500 text-sm mt-2 inter-body">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, index) => (
                    <p key={index} className={`text-gray-600 bg-${project.colour} rounded-3xl px-3 py-1 text-sm inter-subtitle transition hover:scale-105`}>{skill}</p>
                ))}
            </div>
        </div>
    );

}