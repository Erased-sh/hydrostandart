import img from '../assets/first.jpeg'; // Используйте корректное изображение
import { Redeem } from '@mui/icons-material';
import { Button, Typography } from "@mui/material";
import Alert from '../components/alerts/alertWithWindow.tsx';
import AlertSuccess from '../components/alerts/alert.tsx';
import {useState} from "react";

const MyComponent = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);

    // Функция для открытия Snackbar
    const handleClick = () => {
        setOpenAlert(true);
    };

    // Функция для закрытия Snackbar
    const handleClose = () => {
        setOpenAlert(false);
    };

    const handleSuccess = () => {
        setOpenAlertSuccess(true);
    }

    const handleCloseAlertSuccess = () => {
        setOpenAlertSuccess(false);
    }

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <img
                src={img}
                alt="first"
                style={{ width: '100vw', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                maxWidth: '80vw'
            }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Гидроизоляция кровли и фундамента под ключ за 5 дней с выгодой до 20000 руб.
                </Typography>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>Экономия до 20000 рублей на материалах за счет оптовых скидок у крупнейших поставщиков в РФ</li>
                    <li>100% прозрачность. Прораб присылает фото и видео процесса каждый день.</li>
                    <li>Строгое соблюдение сроков работ</li>
                    <li>Соблюдение бюджета и отсутствие скрытых платежей</li>
                </ul>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    sx={{ backgroundColor: '#ebcd80', color: 'black', padding: '10px 20px', borderRadius: '20px', height:'60px', marginTop: '20px' }}
                >
                    Рассчитать стоимость
                </Button>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    marginTop: '20px'
                }}>
                    <Redeem style={{ width: '50px', height: '50px', color: 'white' }} />
                    <Typography variant="body1" style={{ color: 'white', margin: 0 }}>
                        К каждому заказу вы получите бонус при заключении договора до 05.08.2024
                    </Typography>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                color: 'black',
                right: '1%',
                zIndex: 1,
                width: '200px' // Устанавливаем ширину, чтобы текст кнопки переносился
            }}>
                <Button
                    variant="contained"
                    color={'secondary'}
                    onClick={handleClick}
                    sx={{ backgroundColor:'black',padding: '10px', borderRadius: '5px', textAlign: 'center' }}
                    style={{ wordWrap: 'break-word' }} // Позволяет перенос текста
                >
                    Получить бесплатную консультацию с выездом замерщика
                </Button>
            </div>
            <Alert open={openAlert} handleClose={handleClose} handleSuccess={handleSuccess} />
            <AlertSuccess open={openAlertSuccess} handleClose={handleCloseAlertSuccess} />
        </div>
    );
};

export default MyComponent;