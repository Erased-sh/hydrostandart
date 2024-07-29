import { Box, Typography, Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons'; // Импортируем иконку VK

const FooterComponent: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', padding: '20px 0', marginTop: 'auto' }}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Контакты
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">+7 (123) 456-78-90</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">+7 (098) 765-43-21</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Адрес
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">
                            г. Москва, ул. Примерная, д. 1
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Режим работы
                    </Typography>
                    <Typography variant="body1">
                        Пн-Вс 9.00-21.00
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Социальные сети
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="https://vk.com" target="_blank" rel="noopener noreferrer" color="inherit">
                            <FontAwesomeIcon icon={faVk} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} AquaFort. Все права защищены.
                </Typography>
            </Box>
        </Box>
    );
};

export default FooterComponent;
