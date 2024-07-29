// alerts/AlertComponent.tsx
import React from 'react';
import { Snackbar, Alert} from '@mui/material';

interface AlertComponentProps {
    open: boolean;
    handleClose: () => void;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ open, handleClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Ваш запрос на звонок успешно отправлен!
            </Alert>
        </Snackbar>
    );
};

export default AlertComponent;
