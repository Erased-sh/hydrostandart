import img from '../assets/eights.jpg';
import Connect from '../components/connect';
import {useState} from "react";
import AlertSuccess from '../components/alerts/alert.tsx';
import {useMediaQuery} from "@mui/material";

const MyComponent: React.FC = () => {
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const handleSuccess = () => {
        setOpenAlertSuccess(true);
    }

    const handleCloseAlertSuccess = () => {
        setOpenAlertSuccess(false);
    }
    const isMobile = useMediaQuery('(max-device-width: 300px)');
    const isCrutch = useMediaQuery('(max-device-width: 1200px)');
    const width = isMobile ? '100vh' : '100vw';
    return (

        <div style={{ width: width, height: "100vh", position: 'relative', overflow: 'hidden' }}>
            <img
                src={img}
                alt="background"
                style={{ width: width, height: "100%", objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Полупрозрачный фон
                borderRadius: '10px',
                maxWidth: '80vw',
                zIndex: 1
            }}>
                <p style={{ fontSize: '20px', margin: 0 }}>
                    Проконсультируйтесь с инженером. Он простыми словами объяснит, какое решение подходит под Вашу ситуацию
                </p>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '160px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Полупрозрачный фон
                left: '290px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                maxWidth: '80vw',
                zIndex: 1
            }}>
                <h4  style={{ fontSize: '16px', margin: 0, color: 'white', listStyleType: 'disc' }}>А так же:</h4>
                <ul style={{ fontSize: '16px', margin: 0, color: 'white', listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Узнайте стоимость работ</li>
                    <li>Получите скидку до 10%</li>
                    <li>Оставьте отзыв о нашей работе</li>
                </ul>
            </div>
            {!isCrutch && (<div style={{
                position: 'absolute',
                bottom: '120px',
                right: '380px',
                maxHeight: '500px',
                width: '400px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                zIndex: 1,
                overflow: 'auto'
            }}>
                <Connect handleSuccess={handleSuccess}/>
            </div>)}
            <AlertSuccess open={openAlertSuccess} handleClose={handleCloseAlertSuccess} />
        </div>
    );
};

export default MyComponent;
