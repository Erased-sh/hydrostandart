import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import teamMember1 from '../assets/review/first.png';
import teamMember2 from '../assets/review/second.png';
import teamMember3 from '../assets/review/third.png';

const Testimonials = () => {
    const items = [
        { imgSrc: teamMember1, altText: "Клиент 1" },
        { imgSrc: teamMember2, altText: "Клиент 2" },
        { imgSrc: teamMember3, altText: "Клиент 3" }
    ];

    return (
        <div style={{ backgroundColor: '#f2f2f2', minHeight: '40vh', padding: '20px', boxSizing: 'border-box' }}>
            <h1 style={{ left:'200px', maxWidth:'800px', marginBottom: '20px', color: "black", margin: '0 auto' }}>Отзывы наших клиентов</h1>
            <h2 style={{ left:'200px', marginBottom: '40px', marginTop:'20px', fontSize: '16px', color: "black", maxWidth: '800px', margin: '0 auto' }}>
                Наши клиенты доверяют нам самые ответственные проекты по гидроизоляции кровли и фундаментов. Вот что они говорят о нашей работе:
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                <div style={{ width: '80%', maxWidth: '800px' }}>
                    <Carousel
                        animation="slide"
                        interval={3000}
                        indicators={false}
                        navButtonsAlwaysVisible={true}
                    >
                        {items.map((item, index) => (
                            <Paper key={index} style={{ padding: '10px', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <img
                                    src={item.imgSrc}
                                    alt={item.altText}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '400px',
                                        borderRadius: '8px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Paper>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
