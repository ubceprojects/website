import "./style.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Bulb from "../../components/Bulb";
import { Suspense, useEffect } from "react";
import { preload } from "react-dom";
import MenuBar from "../../components/MenuBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactCurvedText from "react-curved-text";
import CustomButton from "../../components/CustomButton";
import SplitText from "../../components/SplitText";
import BlurText from "../../components/BlurText";
import Squares from "../../components/Squares";

gsap.registerPlugin(useGSAP);

const Home = () => {
    preload("./logo-min.png");
    useEffect(() => {
        gsap.fromTo(
            ".home-award-text",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 4.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            ".home-button",
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                delay: 5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            ".logo",
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                delay: 4.5,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div id="home-container">
            <Canvas
                shadows
                flat
                camera={{
                    zoom: 3.0,
                }}
            >
                {/* <OrbitControls /> */}
                <directionalLight castShadow shadow-mapSize={[1024, 1024]} position={[0, 0, 10]} intensity={3} />
                <ambientLight intensity={0.1} />

                <Suspense fallback={null}>
                    <Bulb />
                </Suspense>

                <mesh scale={10} receiveShadow position={[0, 0, -2]}>
                    <planeGeometry />
                    <meshStandardMaterial color="#ffffff" />
                </mesh>
            </Canvas>
            <MenuBar />

            {/* <Squares
                speed={0.1}
                squareSize={200}
                direction="top" // up, down, left, right, diagonal
                borderColor="#d3d3d3"
                hoverFillColor="#ffffff"
            /> */}

            <div className="home-award-text">
                <ReactCurvedText width="297" height="150" cx="150" cy={150} rx="65" ry="65" startOffset="5" reversed={true} text="Top Small Club 2024-2025" />
            </div>

            <div className="home-bulb-logo">
                <img src="/logo-min.png" alt="Bulb Logo" width={100} height={100} className="rounded-full logo" />
            </div>

            <div className="home-heading">
                <SplitText
                    text="UBC eProjects"
                    className="font-bold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>

            <div className="home-subheading">
                <BlurText
                    text="Connecting aspiring entrepreneurs and start-up founders in Vancouver and some random text to increase the size."
                    delay={40}
                    animateBy="words"
                    direction="top"
                    className="text-center"
                />
            </div>

            <CustomButton
                text="Become a Member!"
                customClass="home-button"
                styles={{
                    position: "absolute",
                    bottom: "20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />
        </div>
    );
};

useGLTF.preload("/bulb-3d.glb");

export default Home;
