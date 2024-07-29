import React, { useState } from 'react';

const Connect: React.FC = () => {
    // Состояния для хранения данных формы и ошибок
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [errors, setErrors] = useState({ phone: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    // Функция для обработки изменений в полях формы
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));

        // Валидация номера телефона при изменении
        if (id === 'phone') {
            validatePhone(value);
        }
    };

    // Функция для валидации номера телефона
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

    // Функция для обработки отправки формы
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            // Обработка отправки формы, если валидация прошла успешно
            console.log('Форма отправлена:', formData);
            // Здесь может быть ваш код для отправки данных формы
        }
    };

    return (
        <div style={{
            borderRadius: '20px',
            padding: '20px',
            height: '100%',
            width: '100%',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'black', fontSize: '24px' }}>Укажите Ваши контактные данные</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '60%' }}>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Имя"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', color: 'black', backgroundColor: 'white' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Контактный телефон*"
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc',color:"black", backgroundColor: 'white' }}
                    />
                    {errors.phone && <p style={{ color: 'red', fontSize: '14px' }}>{errors.phone}</p>}
                </div>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isFormValid ? 'pointer' : 'not-allowed',
                        fontSize: '16px',
                        opacity: isFormValid ? 1 : 0.6
                    }}
                >
                    Получить консультацию
                </button>
            </form>
        </div>
    );
};

export default Connect;
