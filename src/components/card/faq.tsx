import {useState} from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer' }}>
            <div onClick={toggleOpen} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color:"black"}}>
                <h4 style={{ margin: 0 }}>{question}</h4>
                <span style={{ fontSize: '24px', lineHeight: '24px', color:"black" }}>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>{answer}</p>}
        </div>
    );
};

export default FAQItem;