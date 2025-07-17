import { useState } from "react";
import "./style.css";

const FAQItem = ({ question, answer }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`faq-item ${isHovered ? "hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Question */}
            <div className="question-container">
                <div className="question-content">
                    <h3 className="question-text">{question}</h3>
                    <div className={`chevron ${isHovered ? "rotated" : ""}`}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Answer - Dropdown */}
            <div className={`answer-container ${isHovered ? "expanded" : ""}`}>
                <div className="answer-content">
                    <div className="answer-divider"></div>
                    <p className="answer-text">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
