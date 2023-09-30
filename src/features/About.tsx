import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { myBlogLink, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from '../components/About/ServiceCard';
import { SectionWrapper } from '../hoc';

const About: FC = () => {

    const handleBlgoLink = () => {
        window.open(myBlogLink, '_blank');
    }

    return (
        <>
            <motion.div variants={textVariant(2.2)}>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview.
                </h2>
            </motion.div>
            <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I am majoring in game development at university. Initially, I was fascinated by the creative aspects of game development. However, after taking web development courses, I developed an interest in web-related fields. I learned that web development brings great satisfaction through communicating with users and delivering value. Moreover, I am particularly passionate about pursuing challenges and growth in the frontend development field, aspiring to become a frontend developer in the future. Additionally, I aim to share my experiences and motivations with others through my blog. My blog address is <span onClick={handleBlgoLink} className='font-bold underline cursor-pointer '>https://velog.io/@diso592</span>! Let's communicate a lot!
            </motion.p>

            <div className='flex flex-wrap gap-10 mt-20'>
                {
                    services.map((service, i) => (
                        <ServiceCard 
                            key={service.title} 
                            service={service} 
                            index={i} 
                        />
                    ))
                }
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');