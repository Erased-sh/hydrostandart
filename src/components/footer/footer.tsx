import {Box, Typography, Grid, IconButton, useMediaQuery} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { Telegram } from "@mui/icons-material";

const FooterComponent: React.FC = () => {
    const isMobile = useMediaQuery('(max-device-width: 300px)');
    let gridding= isMobile?12:2;
    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', marginTop: 'auto', padding: '20px' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
                <Grid item xs={gridding} sm={6} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Контакты
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">+7 (923) 611-93-03</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">+7 (993) 351-08-79</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">+7 (977) 989-07-68</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={gridding} sm={2} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Режим работы
                    </Typography>
                    <Typography variant="body1">
                        Пн-Вс 9.00-21.00
                    </Typography>
                </Grid>
                <Grid item xs={gridding} sm={4} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Соц сети
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <IconButton href="https://t.me/hydrostandartroof" target="_blank" rel="noopener noreferrer" color="inherit">
                            <Telegram />
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