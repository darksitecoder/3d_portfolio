import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./tarisland_-_dragon_high_poly/scene.gltf");

  // hook to control animations
  const { actions } = useAnimations(computer.animations, computer.scene);

  useEffect(() => {
    if (!actions) return;

    const animationList = [
      "Qishilong_stand",
      "Qishilong_walk",
      "Qishilong_attack01",
      "Qishilong_fly2",
    ];

    let index = 0;

    const playNext = () => {
      // stop all animations before starting a new one
      Object.values(actions).forEach((action) => action.fadeOut(0.5));
      const action = actions[animationList[index]];
      if (action) {
        action.reset().fadeIn(0.5).play();
        action.clampWhenFinished = true;
        action.loop = Infinity; // loop each animation
      }
      index = (index + 1) % animationList.length;
    };

    playNext(); // start first animation
    const interval = setInterval(playNext, 3000); // change every 1s

    return () => clearInterval(interval);
  }, [actions]);

  console.log(computer.animations.map((a) => a.name)); // just for debugging

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[10, 5, 10]}
        angle={200.12}
        penumbra={10}
        intensity={1}
        castShadow
        shadow-mapSize={4}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.90 : 0.99}
        position={isMobile ? [0, -3, -52.2] : [10, -20.25, 0]}
        rotation={[-0.01, -0.8, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [50, 300, 500], fov: 5 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
