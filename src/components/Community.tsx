import { ExperienceCard } from './ExperienceCard';
import { MultipleExperienceCard } from './MultipleExperienceCard';
import { community } from '../constants';

export function Community() {

    return (
        <div className="scroll-mt-8 community mx-auto mt-14" id="community">
            <h1 className="mb-10 text-3xl text-left font-medium">&#127758; <span className="underline decoration-2 underline-offset-2">Community</span></h1>
            {community.map((exp, index) => (
                exp.positions? (
                    <MultipleExperienceCard key={index} experience={exp} />
                ) : (
                    <ExperienceCard key={index} experience={exp} />
                )
            ))}
        </div>
    );

}