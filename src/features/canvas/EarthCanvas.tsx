import type { FC } from 'react';
import { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';
import { Canvas } from '@react-three/fiber';

const Earth: FC = () => {

    const earth = useGLTF('./planet/scene.gltf');

    return (
        <primitive 
            object={earth.scene}
            scale={2.4}
            position-y={0}
            rotation-y={0}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        />
    );
};

const EarthCanvas: FC = () => {

    return (
        <Canvas 
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{  }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas;