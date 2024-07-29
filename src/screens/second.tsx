const MyComponent = () => {
    return (
        <div style={{
            backgroundColor: '#f2f2f2',
            minHeight: '50vh', // Изменено на 100vh для заполнения всего экрана

            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h2 style={{
                color: 'black', // Цвет текста черный
                marginBottom: '40px',
                width: '100%', // Заголовок займет всю ширину контейнера
                paddingLeft: '535px', // Отступ слева
            }}>
                Наши Услуги
            </h2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <table style={{
                    borderCollapse: 'collapse',
                    width: '100%', // Таблица займет всю ширину контейнера
                    maxWidth: '1200px', // Максимальная ширина таблицы
                    height: 'auto',
                    margin: '0 auto', // Центрирование таблицы
                }}>
                    <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <th style={{ padding: '10px', textAlign: 'left', color: 'black' }}>Услуга</th>
                        <th style={{ padding: '10px', textAlign: 'left', color: 'black' }}>Описание</th>
                        <th style={{ padding: '10px', textAlign: 'left', color: 'black' }}>Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>Гидроизоляция кровли</strong>
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            Защита кровли от протечек и влаги с использованием современных материалов
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>от 450 ₽/м²</strong>
                        </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>Гидроизоляция фундамента</strong>
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            Предотвращение разрушения фундамента из-за влаги и грунтовых вод
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>от 700 ₽/м²</strong>
                        </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>Ремонт гидроизоляции</strong>
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            Восстановление поврежденной гидроизоляции для продления срока службы конструкции
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>от 450 ₽/м²</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>Консультация специалиста</strong>
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            Профессиональная оценка состояния и рекомендация по гидроизоляции
                        </td>
                        <td style={{ padding: '10px', color: 'black' }}>
                            <strong>Бесплатно</strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyComponent;

