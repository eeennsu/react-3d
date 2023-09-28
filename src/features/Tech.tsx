import type { FC } from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import TechBallListItem from '../components/Tech/TechBallListItem';

const Tech: FC = () => {

    return (
        <div className='flex flex-row flex-wrap justify-center gap-x-24 gap-y-5'>
            {
                technologies.map((tech) => (
                    <TechBallListItem 
                        key={tech.name}
                        tech={tech}
                    />
                ))
            }
        </div>
    );
};

export default SectionWrapper(Tech);