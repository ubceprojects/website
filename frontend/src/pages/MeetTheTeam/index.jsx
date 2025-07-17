import "./style.css";
import MenuBar from "../../components/MenuBar";
import teamData from "../../data/teamData";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import { useState } from "react";

const MeetTheTeam = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { key: "all", label: "All" },
        { key: "current", label: "Current Members" },
        { key: "alumni", label: "Alumni" },
        { key: "president", label: "President" },
        { key: "technology", label: "Technology" },
        { key: "marketing", label: "Marketing" },
        { key: "operations", label: "Operations" },
    ];

    const filteredTeamData = teamData.filter((member) => {
        if (activeFilter === "all") return true;
        if (activeFilter === "current") return member.status?.toLowerCase() === "current";
        if (activeFilter === "alumni") return member.status?.toLowerCase() === "alumni";
        return member.role.toLowerCase().includes(activeFilter.toLowerCase());
    });

    return (
        <div className="team-container">
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <MenuBar />

                {/* Text block on the left */}
                <div className="textBlock">
                    Our
                    <br />
                    2025–2026
                    <br />
                    eProjects
                    <br />
                    Team
                </div>

                {/* Centered Image*/}
                <div className="centeredImage">
                    <img src={"/about-graphic.png"} alt="About Graphic" />
                </div>

                {/* Description text below image */}
                <div className="descriptionText">
                    Meet the 2024/2024 Presidents, the Vice-Presidents, the VP of Finance, the Internal Director, the Operations team, the Marketing team, the Corporate Relations team, and the First
                    Year Representatives that make UBC eProjects come alive!
                </div>

                {/* Four side-by-side buttons */}
                {/* <div className={styles.buttonContainer}>
                    {filters.map((filter) => (
                        <button 
                            key={filter.key} 
                            className={`${styles.button} ${activeFilter === filter.key ? styles.activeButton : ''}`}
                            onClick={() => setActiveFilter(filter.key)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div> */}

                <div className="buttonRows">
                    <div className="buttonRow">
                        {filters.slice(0, 3).map((filter) => (
                            <button key={filter.key} className={`button ${activeFilter === filter.key ? "activeButton" : ""}`} onClick={() => setActiveFilter(filter.key)}>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                    <div className="buttonRow">
                        {filters.slice(3).map((filter) => (
                            <button key={filter.key} className={`button ${activeFilter === filter.key ? "activeButton" : ""}`} onClick={() => setActiveFilter(filter.key)}>
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Profile cards grid */}
                <div className="cardGrid">
                    {filteredTeamData.map((member, i) => (
                        <ProfileCard key={i} {...member} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeetTheTeam;
