import { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MenuBar = () => {
    const menuBarRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.fromTo(
                menuBarRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                }
            );
            gsap.fromTo(
                ".menu-item",
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0.7,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }, 1500);
    }, []);

    return (
        <div ref={menuBarRef} className="menu-bar">
            <div className="menu-item">Home</div>
            <div className="menu-item">About Us</div>
            <div className="menu-item">Meet the Team</div>
            <div className="menu-item">Sponsors</div>
            <div className="menu-item">FAQ</div>
        </div>
    );
};

export default MenuBar;
