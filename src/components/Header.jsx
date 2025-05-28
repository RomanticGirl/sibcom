import React from 'react';
import { Link } from 'react-router-dom'; // Для создания ссылок
import logo from '../assets/sibcom-logo.png'; // Путь к логотипу

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Логотип */}
      <div>
        <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', color: '#fff' }}>
          <img src={logo} alt="Sibcom Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>
      </div>

      {/* Меню */}
      <nav>
        <a href="/" style={{ color: '#fff', margin: '0 1rem' }}>Главная</a>
        <a href="/about" style={{ color: '#fff', margin: '0 1rem' }}>О компании</a>
        <a href="/services" style={{ color: '#fff', margin: '0 1rem' }}>Услуги</a>
        <a href="/products" style={{ color: '#fff', margin: '0 1rem' }}>Продукция</a>
        <a href="/projects" style={{ color: '#fff', margin: '0 1rem' }}>Проекты</a>
        <a href="/achievements" style={{ color: '#fff', margin: '0 1rem' }}>Достижения</a>
        <a href="/contacts" style={{ color: '#fff', margin: '0 1rem' }}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;