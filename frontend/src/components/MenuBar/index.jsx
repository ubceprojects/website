import { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const MenuBar = ({ type = "" }) => {
    const menuBarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (type === "home") {
            setTimeout(() => {
                const alreadyAnimated = sessionStorage.getItem("home-animated");
                if (alreadyAnimated) return;

                gsap.fromTo(
                    menuBarRef.current,
                    { y: -100, opacity: 0 },
                    {
                        y: 20,
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
        }
    }, []);

    return (
        <div ref={menuBarRef} className="menu-bar" style={{ transform: type === "home" && !sessionStorage.getItem("home-animated") ? "translateY(-100%)" : "translateY(25%)" }}>
            <div className="menu-item menu-logo">
                <img src="/logo-min.png" alt="Bulb Logo" width={50} height={50} className="rounded-full logo" />
            </div>
            <div
                className="menu-item hover"
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </div>
            <div
                className="menu-item hover"
                onClick={() => {
                    navigate("/about");
                }}
            >
                About Us
            </div>
            <div
                className="menu-item hover"
                onClick={() => {
                    navigate("/team");
                }}
            >
                Meet the Team
            </div>
            <div className="menu-item hover">Sponsors</div>
            <div
                className="menu-item hover"
                onClick={() => {
                    navigate("/faq");
                }}
            >
                FAQ
            </div>
            <div className="menu-socials menu-item">
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-envelope"></i>
            </div>
        </div>
    );
};

export default MenuBar;
