import type { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
 
type Props = {
    index: number;
    testimonial: Testimonial
}

const FeedbackCard: FC<Props> = ({ index, testimonial: { company, designation, image, name, testimonial } }) => {

    return (
        <motion.div variants={fadeIn('', 'spring', index * 0.8, 0.75)}>
            <div className='xs:w-[320px] w-full h-full bg-black-200 rounded-3xl p-10'>
                <div className='text-5xl font-black sm:text-7xl'>
                    "
                </div>           
                <p className='text-base tracking-wider text-white'>
                    {testimonial}
                </p>
                <div className='flex items-center justify-between mt-7'>
                    <div className='flex flex-col gap-y-1'>
                        <p className='font-bold'>
                            @{name}
                        </p>
                        <p className='text-secondary'>
                            {designation} of {company}
                        </p>
                    </div>
                    <img src={image} alt={name} className='object-cover w-12 h-12 border-[3px] border-white rounded-full' />
                </div>      
            </div>
        </motion.div>             
    );
}

export default FeedbackCard;