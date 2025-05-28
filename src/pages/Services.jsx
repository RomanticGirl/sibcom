import React from 'react';

const services = [
  { id: 1, name: 'Картридж щетки для трактора Беларусь', price: 'по согласованию' },
  { id: 2, name: 'Нож ковша JCB (основной)', price: 'по согласованию' },
  { id: 3, name: 'Нож ковша DZ 90', price: 'по согласованию' },
  { id: 4, name: 'Металлоконструкции по чертежам заказчика', price: 'по согласованию' },
];

const Services = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Наша продукция</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {services.map(service => (
          <div
            key={service.id}
            data-aos="fade-up"
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'box-shadow 0.3s',
            }}
          >
            <h3>{service.name}</h3>
            <p><strong>Цена:</strong> {service.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;