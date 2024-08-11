import React, { useState } from 'react';
import { AppBar, Typography, Button, Box, Card, CardContent, Grid, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Alert from '../alerts/alertWithWindow.tsx';
import AlertSuccess from '../alerts/alert.tsx';

const HeaderComponent: React.FC = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);

    const handleClick = () => {
        setOpenAlert(true);
    };

    const handleClose = () => {
        setOpenAlert(false);
    };

    const handleSuccess = () => {
        setOpenAlertSuccess(true);
    };

    const handleCloseAlertSuccess = () => {
        setOpenAlertSuccess(false);
    };

    // Определяем размер экрана
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            <AppBar position="relative" sx={{ backgroundColor: 'black', p: 2 }}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center" // Центрируем элементы по горизонтали
                    direction="row" // Устанавливаем направление строк
                    spacing={2}
                    sx={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }} // Оборачиваем на мобильных
                >
                    <Grid item>
                        <Typography variant={isMobile ? "h5" : "h3"} sx={{ letterSpacing: '0.1em', color: 'white' }}>
                            AquaFort
                        </Typography>
                    </Grid>

                    {!isMobile && (
                        <Grid item>
                            <Card sx={{ maxWidth: 400, backgroundColor: 'black' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ textAlign: 'center', color: 'white' }}>
                                        Гидроизоляция кровли и фундамента под ключ в МСК и МО
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}

                    {!isMobile && (
                        <Grid item>
                            <Typography variant="body2" sx={{ color: 'white' }}>
                                Пн-Вс 9.00-21.00
                            </Typography>
                        </Grid>
                    )}

                    <Grid item>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <PhoneIcon sx={{ color: 'white', mr: 1 }} />
                            <Box>
                                <Typography variant="body2" sx={{ color: 'white', textAlign: isMobile ? 'center' : 'left' }}>
                                    +7 (123) 456-78-90
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'white', textAlign: isMobile ? 'center' : 'left' }}>
                                    +7 (098) 765-43-21
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Условное отображение кнопки только на больших экранах */}
                    {!isMobile && (
                        <Grid item>
                            <Button
                                variant="contained"
                                onClick={handleClick}
                                color="secondary"
                                sx={{
                                    backgroundColor: '#ebcd80',
                                    color: 'black',
                                    width: isMobile ? '100%' : 'auto',
                                }}
                            >
                                Заказать звонок
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </AppBar>
            <Alert open={openAlert} handleClose={handleClose} handleSuccess={handleSuccess} />
            <AlertSuccess open={openAlertSuccess} handleClose={handleCloseAlertSuccess} />
        </>
    );
};

export default HeaderComponent;
