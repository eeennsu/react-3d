import type { FC } from 'react';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'
import styles from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from '../components/Experience/ExperienceCard';

const Experience: FC = () => {

    return (
        <>
            <motion.div variants={textVariant(0.6)} className='flex flex-col items-center justify-center'>
                <p className={`${styles.sectionSubText}`}>
                    WHAT I HAVE DONE SO FAR
                </p>                
                <h2 className={`${styles.sectionHeadText}`}>
                    Work Experience.
                </h2>              
            </motion.div>
            <div className='flex flex-col mt-20'>
                {
                    experiences.map((experience, i) => (
                        <ExperienceCard 
                            key={i}
                            experience={experience}
                        />
                    ))
                }
            </div>
        </>
    );
};

const SectionedExperience = SectionWrapper(Experience, 'work');

export default SectionedExperience;