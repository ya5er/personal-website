import { ExperienceCard } from './ExperienceCard';
import { experience } from '../constants';

export function Experience() {

    return (
        <div className="scroll-mt-8 experience mx-auto mt-14" id="experience">
            <h1 className="mb-10 text-3xl text-left font-medium">&#128188; <span className="underline decoration-2 underline-offset-2">Experience</span></h1>
            {experience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
            ))}
        </div>
    );

}