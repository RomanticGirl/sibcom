// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/sibcom-logo.png'; // Путь к логотипу

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '2rem 1rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Логотип */}
        <img src={logo} alt="Sibcom Logo" style={{ height: '50px', width: 'auto', marginBottom: '1rem' }} />

        <h2 style={{ marginBottom: '1rem' }}>Sibcom</h2>
        <p>Технологии набрызгбетонирования с 2008 года</p>

        <div style={{ margin: '1.5rem 0' }}>
          <p><strong>Тел:</strong> +7 (905) 948-09-49</p>
          <p><strong>Email:</strong> sibcom_engineering@mail.ru</p>
          <p><strong>Время работы:</strong> Пн–Пт, 9:00–17:00</p>
        </div>

        <p style={{ fontSize: '.9rem', color: '#aaa' }}>
          © {new Date().getFullYear()} Sibcom. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;