import img from '../assets/eights.jpg';
import Connect from '../components/connect';

const MyComponent: React.FC = () => {
    return (
        <div style={{ width: "100vw", height: "100vh", position: 'relative', overflow: 'hidden' }}>
            <img
                src={img}
                alt="background"
                style={{ width: "100vw", height: "100%", objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Полупрозрачный фон
                borderRadius: '10px',
                maxWidth: '80vw',
                zIndex: 1
            }}>
                <p style={{ fontSize: '20px', margin: 0 }}>
                    Проконсультируйтесь с инженером. Он простыми словами объяснит, какое решение подходит под Вашу ситуацию
                </p>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '160px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Полупрозрачный фон
                left: '290px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                maxWidth: '80vw',
                zIndex: 1
            }}>
                <h4  style={{ fontSize: '16px', margin: 0, color: 'white', listStyleType: 'disc' }}>А так же:</h4>
                <ul style={{ fontSize: '16px', margin: 0, color: 'white', listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Узнайте стоимость работ</li>
                    <li>Получите скидку до 10%</li>
                    <li>Оставьте отзыв о нашей работе</li>
                </ul>
            </div>
            {/* Вставляем компонент Connect */}
            <div style={{
                position: 'absolute',
                bottom: '120px',
                right: '380px',  // Увеличиваем отступ от правого края
                maxHeight: '500px',  // Устанавливаем максимальную высоту
                width: '400px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Полупрозрачный фон
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                zIndex: 1,
                overflow: 'auto'  // Добавляем прокрутку, если содержимое превышает высоту
            }}>
                <Connect />
            </div>
        </div>
    );
};

export default MyComponent;
