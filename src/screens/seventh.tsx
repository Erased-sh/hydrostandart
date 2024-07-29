import FAQItem from '../components/card/faq';
import { Grid } from '@mui/material';
import Alert from '../components/alerts/alertWithWindow.tsx';
import AlertSuccess from '../components/alerts/alert.tsx';
import {useState} from "react";

const FAQ: React.FC = () => {
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
        <div style={{ backgroundColor: "white", minHeight: '50vh', padding: '20px', boxSizing: 'border-box' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Часто задаваемые вопросы</h1>
            <h2 style={{ marginLeft:'450px',textAlign: 'center', marginBottom: '40px', fontSize: '16px', maxWidth: '800px', color: 'black' }}>
                Ответы на популярные вопросы о гидроизоляции
            </h2>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Какие материалы используете?"
                        answer="Мы используем только проверенные и качественные материалы от ведущих производителей, таких как Технониколь и Изоспан. Это гарантирует долговечность и надежность гидроизоляции"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Какова стоимость услуг?"
                        answer="Стоимость зависит от площади и типа объекта. Примерная цена гидроизоляции кровли начинается от 450 ₽ за квадратный метр, фундамента — от 600 ₽ за квадратный метр."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Работаете ли вы зимой?"
                        answer="Да, мы выполняем работы по гидроизоляции в любое время года, включая зимний период. Используем специальные материалы и технологии, подходящие для низких температур."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Сроки выполнения работ?"
                        answer="Сроки выполнения зависят от объема и сложности проекта. В среднем, гидроизоляция кровли занимает от 3 до 7 дней, фундамента — до 10 дней."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Предоставляете ли вы гарантию на выполненные работы?"
                        answer="Да, мы предоставляем гарантию на все виды работ по гидроизоляции. Гарантийный срок составляет от 1 до 3 лет в зависимости от используемых материалов"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FAQItem
                        question="Как заказать услугу?"
                        answer="Для заказа услуги позвоните нам по телефону или оставьте заявку на сайте. Наш специалист свяжется с вами для уточнения деталей и согласования времени выезда на объект"
                    />
                </Grid>
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h1 style={{ fontSize: '16px', color: 'black', height:'auto',width:'auto' }}>Не нашли ответа? Мы с радостью ответим на любой вопрос!</h1>
                <button onClick={handleClick} style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '10px'
                }}>
                    Задать вопрос
                </button>
            </div>
            <Alert open={openAlert} handleClose={handleClose} handleSuccess={handleSuccess} />
            <AlertSuccess open={openAlertSuccess} handleClose={handleCloseAlertSuccess} />
        </div>
    );
};

export default FAQ;
