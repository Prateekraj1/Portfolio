"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import sakura from "@/assets/sakura.mp3";
import { Bird, Island, Plane, Sky } from "../models";
import HomeInfo from "./HomeInfo";
import Loader from "./Loader";
import { SoundoffIcon, SoundonIcon } from "./icons";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false); // Client check
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [biplaneConfig, setBiplaneConfig] = useState<[number[], number[]]>([
    [3, 3, 3],
    [0, -4, -4],
  ]);
  const [islandConfig, setIslandConfig] = useState<[number[], number[]]>([
    [1, 1, 1],
    [0, -6.5, -43.4],
  ]);

  useEffect(() => {
    setIsMounted(true);

    const adjustScreenSizes = () => {
      // Biplane
      const biplaneScale =
        window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
      const biplanePosition =
        window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];
      setBiplaneConfig([biplaneScale, biplanePosition]);

      // Island
      const islandScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
      const islandPosition = [0, -6.5, -43.4];
      setIslandConfig([islandScale, islandPosition]);
    };

    if (typeof window !== "undefined") {
      adjustScreenSizes();
      window.addEventListener("resize", adjustScreenSizes);
      return () => window.removeEventListener("resize", adjustScreenSizes);
    }
  }, []);
  useEffect(() => {
    if (isMounted) {
      audioRef.current = new Audio(sakura);
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;

      if (isPlayingMusic) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlayingMusic, isMounted]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight args={["#b1e1ff", "#000000", 1]} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandConfig[1]}
            rotation={[0.1, 4.7077, 0]}
            scale={islandConfig[0]}
          />
          <Plane
            isRotating={isRotating}
            position={biplaneConfig[1]}
            rotation={[0, 20.1, 0]}
            scale={biplaneConfig[0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        {!isPlayingMusic ? (
          <SoundoffIcon
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        ) : (
          <SoundonIcon
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        )}
      </div>
    </section>
  );
};

export default Home;
