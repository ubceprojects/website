import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">UBC eProjects Club</h3>
                    <p className="footer-description">Empowering students through innovative engineering projects and real-world experience.</p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/team">Meet the Team</a>
                        </li>
                        <li>
                            <a href="/sponsors">Sponsors</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Contact</h4>
                    <ul className="footer-links">
                        <li>Email: info@ubceprojects.ca</li>
                        <li>Location: UBC Vancouver</li>
                        <li>Follow us on social media</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 UBC eProjects Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
