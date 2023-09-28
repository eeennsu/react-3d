import type { FC } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

type Props = {
    service: Service;
    index: number;
}

const ServiceCard: FC<Props> = ({ service: { icon, title }, index }) => {

    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn('down', 'spring', 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div 
                    // options={{ 
                    //     max:45,
                    //     scale: 1,
                    //     speed: 450
                    // }}
                    className='bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
                >
                    <img src={icon} alt={title} className='object-contain w-16 h-16'/>
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;