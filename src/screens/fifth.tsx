import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import photo1 from '../assets/galery/first.jpg';
import photo2 from '../assets/galery/second.png';
import photo3 from '../assets/galery/third.jpg';
import photo4 from '../assets/galery/forth.jpg';

const PhotoGallery: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'white', minHeight: '80vh', padding: '20px', boxSizing: 'border-box' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={photo1}
                            alt="First"
                            style={{width: '100%', height: '400px',objectFit:'cover', borderRadius: '8px' }}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={photo2}
                            alt="Second"
                            style={{ width: '100%', height: '400px', objectFit:'cover',borderRadius: '8px' }}
                        />
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
                {/* Второй ряд */}
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={photo3}
                            alt="Third"
                            style={{ width: '100%', height: '400px', objectFit:'cover', borderRadius: '8px' }}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={photo4}
                            alt="Fourth"
                            style={{ width: '100%', height: '400px', objectFit:'cover', borderRadius: '8px' }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default PhotoGallery;
