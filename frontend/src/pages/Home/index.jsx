import "./style.css";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Bulb from "../../components/Bulb";
import { Suspense, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactCurvedText from "react-curved-text";
import CustomButton from "../../components/CustomButton";

gsap.registerPlugin(useGSAP);

const Home = () => {
    useEffect(() => {
        gsap.fromTo(
            ".home-heading",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 4,
                ease: "power2.out",
            }
        );

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
            ".home-subheading",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
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
    }, []);

    return (
        <div id="home-container">
            <Canvas
                shadows
                camera={{
                    zoom: 3.0,
                }}
            >
                <directionalLight position={[0, 2, 10]} intensity={3} />
                <ambientLight intensity={0.1} />

                <Suspense fallback={null}>
                    <Bulb />
                </Suspense>
            </Canvas>
            <MenuBar />

            <div className="home-award-text">
                <ReactCurvedText width="297" height="150" cx="150" cy={150} rx="65" ry="65" startOffset="20" reversed={true} text="Top Small Club" />
            </div>

            <div className="home-heading">
                <h1>UBC eProjects</h1>
            </div>

            <div className="home-subheading">
                <p>Connecting aspiring entrepreneurs and start-up founders in Vancouver and some random text to increase the size.</p>
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
