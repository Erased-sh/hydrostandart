// MyComponent.tsx
import React from 'react';
import TeamCard from '../components/card/teamcard'; // Убедитесь, что путь к вашему компоненту правильный
import smirnov from '../assets/team/smirnov.jpg';
import lucas from '../assets/team/lucas.png';
import borisov from '../assets/team/borisov.png';
import barychev from '../assets/team/baryshev.png';
import { Grid } from '@mui/material';


const MyComponent: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'white', minHeight: '50vh', padding: '20px' }}>
            <h1 style={{ marginLeft:'270px', marginBottom: '40px',color:"black" }}>Наша команда</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={24} sm={6} md={4}>
                    <TeamCard
                        imgSrc={smirnov}
                        name="Олег Смирнов"
                        title="Прораб"
                        description="Опыт в строительстве более 20 лет"
                    />
                </Grid>
                <Grid item xs={24} sm={6} md={4}>
                    <TeamCard
                        imgSrc={lucas}
                        name="Лукас Антанайтис"
                        title="Прораб"
                        description="Опыт работы с гидроизоляцией 5 лет"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" padding={'20px'}>
                <Grid item xs={24} sm={6} md={4}>
                    <TeamCard
                        imgSrc={borisov}
                        name="Павел Борисов"
                        title="Прораб"
                        description="Опыт работы с изоляцией фундамента более 4 лет"
                    />
                </Grid>
                <Grid item xs={24} sm={6} md={4}>
                    <TeamCard
                        imgSrc={barychev}
                        name="Владислав Барышев"
                        title="Главный инженер"
                        description="Выпускник Московского Государственного Строительного университета. Опыт работы с гидроизоляцией более 5 лет"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default MyComponent;
