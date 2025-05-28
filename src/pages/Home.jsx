// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--color-yellow)' }}>Технологии набрызгбетонирования</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Компания Sibcom с 2008 года осуществляет деятельность по... В 2015 году был зарегистрирован патент на инновационную технологию торкетбетонирования Termiton X4, которая позволяет компаниям экономить более 500 000 тыс. рублей за счет снижения потерь сухих смесей при набрызге бетона до 3–6%.
        </p>
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ width: '30%', backgroundColor: '#f5f5f5', padding: '1rem', margin: '1rem' }}>
          <h3>Изготовление металлоконструкций</h3>
          <p>Любой сложности по чертежам заказчика.</p>
        </div>
        <div style={{ width: '30%', backgroundColor: '#f5f5f5', padding: '1rem', margin: '1rem' }}>
          <h3>Изготовление токарных изделий</h3>
          <p>Любой сложности по чертежам заказчика.</p>
        </div>
        <div style={{ width: '30%', backgroundColor: '#f5f5f5', padding: '1rem', margin: '1rem' }}>
          <h3>Изготовление картриджей щеток</h3>
          <p>Для трактора Беларусь.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;