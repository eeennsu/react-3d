import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import TestimonialCard from '../components/Testimonials/TestimonialCard';

const Feedbacks: FC = () => {

    return (
        // <div className='mt-12 bg-black-100 roundend-[20px]'>
                            
        // </div>
        <div className='p-4 sm:p-10 bg-tertiary rounded-2xl'>
            <motion.div variants={textVariant(0.6)} className='flex flex-col items-start justify-center p-4 sm:p-0 '>
                <p className={`${styles.sectionSubText}`}> 
                    WHAT OTHERS SAY
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Testimonials.
                </h2>
            </motion.div>
            <div className='flex flex-col items-center justify-center p-5 gap-y-6 sm:gap-x-10 sm:flex-row sm:justify-between'>
                {
                    testimonials.map((testimonial, i) => (
                        <TestimonialCard key={testimonial.name} index={i} testimonial={testimonial} />
                    ))
                }
            </div>
        </div>
    );
};
    
export default SectionWrapper(Feedbacks);