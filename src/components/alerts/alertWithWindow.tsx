import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from "axios";


interface ConnectFormProps {
    open: boolean;
    handleClose: () => void;
    handleSuccess: () => void;
}

const ConnectForm: React.FC<ConnectFormProps> = ({ open, handleClose, handleSuccess }) => {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [errors, setErrors] = useState({ phone: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
        if (id === 'phone') {
            validatePhone(value);
        }
    };

    const validatePhone = (phone: string) => {
        const phonePattern = /^[+]?[0-9]{10,13}$/;
        if (phone && !phonePattern.test(phone)) {
            setErrors(prevErrors => ({ ...prevErrors, phone: 'Введите корректный номер телефона' }));
            setIsFormValid(false);
        } else {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
            setIsFormValid(!!phone && phonePattern.test(phone));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Форма отправлена:', formData);
            axios.post('https://45.87.247.20:8080', formData)
                .then(response => {
                    console.log(response.status);
                })
                .catch(error => {
                    console.log(error);
                });
            handleSuccess(); // Показываем успешный алерт
            handleClose(); // Закрываем модальное окно
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Укажите Ваши контактные данные</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        id="name"
                        label="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        id="phone"
                        label="Контактный телефон*"
                        value={formData.phone}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        required
                        error={!!errors.phone}
                        helperText={errors.phone}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={!isFormValid}
                        style={{ marginTop: '20px' }}
                    >
                        Получить консультацию
                    </Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConnectForm;

