import "./style.css";
import MenuBar from "../../components/MenuBar";
import Footer from "../../components/Footer";
import FAQItem from "../../components/FAQItem";

// Meteors component
const Meteors = ({ number = 20 }) => {
    const meteors = new Array(number).fill(true);

    return (
        <div className="meteors-container">
            {meteors.map((el, idx) => {
                const leftPosition = Math.random() * 100;
                const topPosition = Math.random() * 100;
                const animationDelay = Math.random() * 8;
                const animationDuration = Math.random() * 3 + 6;

                return (
                    <span
                        key={"meteor" + idx}
                        className="meteor"
                        style={{
                            top: `${topPosition}%`,
                            left: `${leftPosition}%`,
                            animationDelay: `${animationDelay}s`,
                            animationDuration: `${animationDuration}s`,
                        }}
                    ></span>
                );
            })}
        </div>
    );
};

const faqData = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
    },
    {
        id: 2,
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are also available at checkout.",
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location but typically range from 7-14 business days. Additional customs fees may apply.",
    },
    {
        id: 4,
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly with the shipping carrier.",
    },
    {
        id: 5,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay for your convenience.",
    },
    {
        id: 6,
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter our fulfillment process and cannot be changed. Please contact us immediately if you need to make changes.",
    },
    {
        id: 7,
        question: "Do you offer customer support?",
        answer: "Yes! Our customer support team is available Monday-Friday 9AM-6PM EST via email, phone, and live chat. We typically respond to emails within 24 hours.",
    },
    {
        id: 8,
        question: "Are your products covered by warranty?",
        answer: "Most of our products come with a manufacturer's warranty ranging from 1-3 years depending on the item. Warranty details are listed on each product page and included with your purchase.",
    },
];

export default function FAQ() {
    return (
        <div className="faq-page">
            {/* Header */}
            <MenuBar />

            {/* Main Content */}
            <div className="faq-container">
                {/* Meteor Background */}
                {/* <div className="meteor-background">
          <Meteors number={50} />
        </div> */}

                {/* Content */}
                <div className="content-wrapper">
                    {/* Header */}
                    <div className="header">
                        <div className="header-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <p className="header-subtitle">Find answers to common questions UBC eProjects Club!</p>
                    </div>

                    {/* FAQ Items */}
                    <div className="faq-list">
                        {faqData.map((faq) => (
                            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
