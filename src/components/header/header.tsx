import {AppBar, Typography, Button, Box, Card, CardContent, Grid} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const HeaderComponent = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
            <Grid container alignItems="center" justifyContent="space-around" spacing={2}>
                <Grid item>
                    <Typography variant="h3" sx={{ letterSpacing: '0.1em', color: 'white' }}>
                        AquaFort
                    </Typography>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 400, backgroundColor:"black" } }>
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: 'center', color:"white"}}>
                                Гидроизоляция кровли и фундамента под ключ в МСК и МО
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        Пн-Вс 9.00-21.00
                    </Typography>
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon sx={{ color: 'white', mr: 1 }} />
                        <Box>
                            <Typography variant="body1" sx={{ color: 'white' }}>+7 (123) 456-78-90</Typography>
                            <Typography variant="body1" sx={{ color: 'white' }}>+7 (098) 765-43-21</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" sx={{backgroundColor:'#ebcd80', color:'black'}}>
                        Заказать звонок
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default HeaderComponent;

