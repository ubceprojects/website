import "./style.css";
import MenuBar from "../../components/MenuBar";

const About = () => {
    return (
        <div id="about-container">
            <MenuBar />

            <div className="about-main">
                <div className="about-left">
                    <div className="photo"></div>
                </div>
                <div className="about-right">
                    <div className="about-heading">
                        <h1>About Us</h1>
                    </div>
                    <div className="about-text">
                        Tomorrow’s business and community leaders are actively involved in a thriving atmosphere of growth and learning on our campus. eProjects is dedicated to supporting and
                        encouraging students during this stage of development. We believe in fostering an environment that promotes collaboration, innovation, and personal growth among our students.
                    </div>
                </div>
            </div>

            <div className="about-goals-container">
                <div className="about-goals">
                    <div className="goals-heading">
                        <h1>Our Goals</h1>
                    </div>
                    <div className="goals-cards">hello</div>
                </div>
            </div>
        </div>
    );
};

export default About;
