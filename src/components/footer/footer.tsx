import { Box, Typography, Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import {Telegram} from "@mui/icons-material"; // Импортируем иконку VK

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
                        <Typography variant="body1">+7 (923) 611-93-03
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">+7 (993) 351-08-79
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">+7 (977) 989-07-68</Typography>
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
                        <IconButton href="https://t.me/hydrostandartroof" target="_blank" rel="noopener noreferrer" color="inherit">
                            <Telegram/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Hydrostandart. Все права защищены.
                </Typography>
            </Box>
        </Box>
    );
};

export default FooterComponent;
