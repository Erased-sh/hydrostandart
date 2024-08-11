// Process.tsx
import React from 'react';
import ProcessStep from '../components/card/process.tsx';

const Process: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#f2f2f2', minHeight: '70vh', padding: '20px', boxSizing: 'border-box' }}>
            <h1 style={{marginBottom: '20px', color:"black" }}>Наш процесс</h1>
            <h2 style={{marginBottom: '40px', fontSize: '16px', maxWidth: '800px', color:"black" }}>
                Этапы выполнения гидроизоляционных работ
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <ProcessStep
                    title="Консультация и осмотр"
                    description="Наши специалисты приедут на объект для оценки состояния кровли или фундамента, проведут необходимые замеры и дадут рекомендации."
                />
                <ProcessStep
                    title="Составление сметы"
                    description="После осмотра мы составим подробную смету, включающую стоимость материалов и работ, и согласуем её с вами."
                />
                <ProcessStep
                    title="Заключение договора"
                    description="После утверждения сметы мы заключим договор, в котором будут прописаны все условия и сроки выполнения работ."
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <ProcessStep
                    title="Подготовительные работы"
                    description="На этом этапе мы проведем подготовительные работы, включая очистку и подготовку поверхностей для нанесения гидроизоляционных материалов."
                />
                <ProcessStep
                    title="Нанесение гидроизоляции"
                    description="Наши специалисты нанесут выбранные гидроизоляционные материалы, соблюдая все технологические нормы и требования."
                />
                <ProcessStep
                    title="Приемка и гарантия"
                    description="После завершения работ проводится приемка, и мы предоставляем гарантию на выполненные работы и использованные материалы."
                />
            </div>
        </div>
    );
};

export default Process;