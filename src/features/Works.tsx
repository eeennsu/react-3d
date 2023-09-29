import type { FC } from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import ProjectCard from '../components/Works/ProjectCard';

const Works: FC = () => {

    return (
        <>
            <motion.div variants={textVariant(2.2)}>
                <p className={styles.sectionSubText}>
                    MY WORK
                </p>
                <h2 className={styles.sectionHeadText}>
                    Projects.
                </h2>
            </motion.div>   
            <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi cupiditate quod! Incidunt dolor atque recusandae, voluptate vero amet minima vel, minus perspiciatis eaque corporis omnis dignissimos dolorum neque modi consequatur voluptas, saepe unde? Illo doloribus, illum dignissimos vel velit, fuga quidem ipsa mollitia recusandae eligendi sit beatae rerum cupiditate, veritatis qui ipsum. Quod odio voluptas cum dolor assumenda quaerat.
            </motion.p>

            <div className='flex flex-wrap gap-5 mt-20'>
                {
                    projects.map((project, i) => (
                        <ProjectCard 
                            key={project.name} 
                            index={i} 
                            project={project} 
                        />
                    ))
                }
            </div>
        </>
    );
};

const SectionedWorks = SectionWrapper(Works, 'work');

export default SectionedWorks;