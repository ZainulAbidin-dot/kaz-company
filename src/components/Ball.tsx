import { Suspense } from 'react';

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

interface BallProps {
  imgUrl: string;
}

function Ball({ imgUrl }: BallProps) {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1.25} floatIntensity={2}>
      <ambientLight intensity={0.95} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
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
}

interface BallCanvasProps {
  icon: string;
}

export function BallCanvas({ icon }: BallCanvasProps) {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableRotate={false} enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
