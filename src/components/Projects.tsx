import { projects } from '../constants';
import { ProjectCard } from './ProjectCard';

export function Projects() {

    return (
        <div className="scroll-mt-8 experience mx-auto mt-14 mb-20" id="projects">
            <h1 className="mb-10 text-3xl text-left font-medium">&#128187; <span className="underline decoration-2 underline-offset-2">Projects</span></h1>
            <div className="flex flex-wrap gap-6 justify-between">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </div> 
        </div>
    );

}