import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";

interface BallProps {
    imgUrl: string;
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={1} rotationIntensity={1.25} floatIntensity={2}>
            <ambientLight intensity={0.95} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh  receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

interface BallCanvasProps {
    icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
    return (
        <Canvas
            // frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableRotate={false} enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;