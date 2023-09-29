import type { FC } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import  { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';

type Props = {
    intensity: number;
    isMobile?: boolean;
}

// 3d computer
const Computers: FC<Props> = ({ intensity, isMobile }) => {

    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh>            
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={intensity} />
            <spotLight 
                position={[-20, 50, 10]} 
                angle={0.12}
                penumbra={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive 
                object={computer.scene} 
                scale={isMobile ? 0.6 : 0.7}
                position={isMobile ? [0, -3.25, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.12]}
            />
        </mesh>
    );
};

const ComputerCanvas: FC<Props> = ({ intensity }) => {
    
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, []);

    return (
        <Canvas 
            frameloop='demand' 
            shadows 
            camera={{ position: [20, 3, 5], fov: 25 }} 
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false} 
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2}
                />
            
                <Computers intensity={intensity} isMobile={isMobile} />
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas;