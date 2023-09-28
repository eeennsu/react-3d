import { motion } from 'framer-motion';
import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
import styles from '../styles';
import { ComputersCanvas } from './canvas';
import { TiLightbulb } from 'react-icons/ti';
import { useProgress } from '@react-three/drei';
 
const Hero: FC = () => {

    const [intensity, setIntensity] = useState(1);
    const { progress } = useProgress();

    const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIntensity(e.target.valueAsNumber);
    }

    return (
        <main className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-violet-500'/>
                    <div className='w-1 h-40 from-violet-500 to-transparent sm:h-80 bg-gradient-to-b'/>
                </div>
                
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className='text-violet-500'>Eeennsu</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Lorem ipsum dolor sit amet, consectetur <br className='hidden sm:block'/> 
                        adipisicing elit. Omnis, possimus.
                    </p>
                </div>        
            </div>   
            {
                (progress === 100) && (
                    <div className='absolute flex flex-col sm:flex-row justify-center gap-y-4 sm:w-2/12 w-2/3 sm:gap-x-2 items-center z-50 top-[38%] right-1/2 transform translate-x-1/2 '>
                        <div className='text-5xl sm:text-3xl'> 
                            <TiLightbulb />
                        </div>
                    
                        <input type='range' min={0} max={10} value={intensity} onChange={handleRangeChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div> 
                )
            }
            <ComputersCanvas intensity={intensity} />

            <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className='w-3 h-3 mb-1 rounded-full bg-secondary'
                        />
                    </div>
                </a>
            </div>
        </main>
    );
};

export default Hero;