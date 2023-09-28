import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from '../components/About/ServiceCard';
import { SectionWrapper } from '../hoc';

const About: FC = () => {

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid commodi possimus ab optio recusandae, error asperiores. Quaerat, sequi nulla voluptas quibusdam eaque nisi consequatur vero maxime, dicta iste quisquam officia non velit, magni autem impedit unde. Consequatur autem culpa maiores delectus vitae iure quos ea quia deserunt suscipit optio earum quisquam facere eos, tenetur accusamus dolorem amet dolorum, facilis cumque? Qui minima aperiam vitae non et totam aut! Dicta ipsum earum, sunt, aspernatur, voluptates facilis sapiente alias rem ipsa officiis laborum adipisci consectetur necessitatibus similique mollitia delectus! Vero qui fugit, dicta voluptas ex assumenda rem earum provident suscipit dignissimos?
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