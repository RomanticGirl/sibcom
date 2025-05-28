// src/pages/Achievements.jsx
import React from 'react';

const achievements = [
  {
    id: 1,
    title: 'Серебряная медаль за ТЕРМИТОН-X4',
    year: '2015',
    location: 'XXII Международная специализированная выставка «УГОЛЬ РОССИИ И МАЙНИНГ»',
    description: 'За ствол обеспечивавшего набрызгбетонирования ТЕРМИТОН-X4, представленный на конкурс «Лучший экспонат».',
    image: '/achievements/gramota-termiton-x4.jpg'
  },
  {
    id: 2,
    title: 'Бронзовая медаль за технологию Tertilon®',
    year: '2015',
    location: 'IV Форум предпринимателей и шоу-выставка «НАКАНУНЕ РОЖДЕСТВА»',
    description: 'За технологию набрызгбетонирования Tertilon®, представленную на конкурс «Лучший экспонат».',
    image: '/achievements/gramota-tertilon.jpg'
  }
];

const Achievements = () => {
  return (
    <main style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <section data-aos="fade-up">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#FFD700' }}>Наши достижения</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
          Мы активно участвуем в отраслевых мероприятиях и стремимся к постоянному развитию.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {achievements.map(item => (
            <div
              key={item.id}
              className="card"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  objectFit: 'cover', // Заполняет всю область без обрезки
                  borderRadius: '8px 8px 0 0', // Округляем только верхние углы
                }}
              />
              <div className="content">
                <h3>{item.title}</h3>
                <p><strong>Дата:</strong> {item.year}, <strong>Место:</strong> {item.location}</p>
                <p style={{ marginTop: '1rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Achievements;