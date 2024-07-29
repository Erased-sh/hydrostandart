interface ProcessStepProps {
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', width: '250px', textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '10px', color:"black" }}>{title}</h3>
            <p style={{ fontSize: '14px', color: 'black' }}>{description}</p>
        </div>
    );
};

export default ProcessStep;