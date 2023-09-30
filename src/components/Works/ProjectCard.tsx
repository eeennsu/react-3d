import type { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { Tilt } from 'react-tilt';
import TagListItem from './TagListItem';
import { github } from '../../assets';

type Props = {
    index: number;
    project: Project
}

const ProjectCard: FC<Props> = ({ index, project: { description, image, name, tags, source_code_link } }) => {

    const handleGitLink = () => {
        window.open(source_code_link, '_blank');
    }

    return (    
        <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} >
            <Tilt 
                options={{
                    reverse:        false,  // reverse the tilt direction
                    max:            35,     // max tilt rotation (degrees)
                    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
                    speed:          5000,   // Speed of the enter/exit transition
                    transition:     true,   // Set a transition on enter/exit.
                    axis:           null,   // What axis should be disabled. Can be X or Y.
                    reset:          true,    // If the tilt effect has to be reset on exit.
                    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
                }}
                className='w-full sm:w-[360px] p-4 bg-tertiary rounded-2xl'
            >
                <div className='relative w-full sm:h-[230px]'>
                    <img src={image} alt={name} className='object-cover w-full h-full rounded-2xl' />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div onClick={handleGitLink} className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'>
                            <img src={github} alt='github' className='object-contain w-full h-full p-0.5' />
                        </div>
                    </div>
                </div>   
                <div className='sm:h-[300px] flex flex-col'>
                    <h3 className='mt-6 text-3xl font-bold'>
                        {name}
                    </h3>
                    <p className='mt-4 overflow-y-auto'>
                        {description} 
                    </p>
                    <ul className='flex flex-wrap items-center mt-auto gap-y-2 gap-x-3'>
                        {
                            tags.map((tag) => (
                                <TagListItem key={tag.name} tag={tag}/>
                            ))
                        }
                    </ul> 
                </div>                
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;