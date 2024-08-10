

interface TeamCardProps {
    imgSrc: string;
    name: string;
    title: string;
    description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, title, description }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            // marginBottom: '20px',
            // padding: '15px',
            // borderRadius: '8px',
        }}>
            <div style={{
                // width: '300px',
                // height: '300px',
                // marginRight: '20px',
                // borderRadius: '50%',
                // overflow: 'hidden',
                display: 'flex',
                // borderRadius: "100%"
            }}>
                <img
                    src={imgSrc}
                    alt={name}
                    style={{
                        height: '240px',
                        aspectRatio: '1',
                        objectFit: 'cover',
                        borderRadius: "100%"
                    }}
                />
            </div>
            <div>
                <h3 style={{ margin: '0 0 0 0', color: '#333' }}>{name}</h3>
                <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>{title}</h4>
                <p style={{ margin: 0, color: '#666' }}>{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;


