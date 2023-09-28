import type { FC } from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader: FC = () => {

    const { progress } = useProgress();
    
    return (
        <Html 
            as='div'
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className='canvas-loader'>
                
            </span>          
            <p className='mt-10 text-sm font-bold text-white sm:text-lg'>
                {progress.toFixed(2)}%
            </p>    
            
            {/* <div className="h-3 bg-gray-200 rounded-full w-96 dark:bg-gray-700">
                <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]`} style={{  }}>
                    {percent}%
                </div>
            </div> */}
        </Html>
    );
};

export default Loader;