import "./style.css";
import { useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactCurvedText from "react-curved-text";
import CustomButton from "../../components/CustomButton";
import SplitText from "../../components/SplitText";
import BlurText from "../../components/BlurText";
import { Canvas } from "@react-three/fiber";
import Bulb from "../../components/Bulb";

gsap.registerPlugin(useGSAP);

const Home = () => {
    useEffect(() => {
        const alreadyAnimated = sessionStorage.getItem("home-animated");

        if (alreadyAnimated) return;

        setTimeout(() => {
            sessionStorage.setItem("home-animated", "true");
        }, 5000);
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
                <directionalLight position={[0, 0, 10]} intensity={3} />
                <ambientLight intensity={0.1} />

                <Bulb />
            </Canvas>
            <MenuBar type="home" />

            <div className="home-award-text">
                <ReactCurvedText width="297" height="150" cx="150" cy={150} rx="65" ry="65" startOffset="5" reversed={true} text="Top Small Club 2024-2025" />
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
                {sessionStorage.getItem("home-animated") ? (
                    <div>Connecting aspiring entrepreneurs and start-up founders in Vancouver and some random text to increase the size.</div>
                ) : (
                    <BlurText
                        text="Connecting aspiring entrepreneurs and start-up founders in Vancouver and some random text to increase the size."
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="text-center"
                    />
                )}
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

export default Home;
