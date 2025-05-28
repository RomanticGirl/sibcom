// src/pages/Products.jsx
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'БМ-86',
    image: '/products/bm-86.jpg',
    description: 'Производительность: 5 м³/час',
    price: 670000, // Число для сортировки
    country: 'РФ',
    features: [
      'Гарантия: 1 год',
      'Вес без принадлежностей: 799/1033 кг',
      'Максимальная дальность подачи смеси: 100/200 м'
    ]
  },
  {
    id: 2,
    name: 'AC-2 TORNADO',
    image: '/products/ac-2-tornado.jpg',
    description: 'Производительность: 1-4 м³/час',
    price: 780000,
    country: 'РФ',
    features: [
      'Гарантия: 1 год',
      'Вес без принадлежностей: 210 кг',
      'Максимальная дальность подачи смеси: 100/200 м'
    ]
  },
  {
    id: 3,
    name: 'Aliva-237',
    image: '/products/aliva-237.jpg',
    description: 'Производительность: 1,7-4,0 м³/час',
    price: 1200000,
    country: 'Швейцария',
    features: [
      'Гарантия: 1 год',
      'Вес без принадлежностей: 320 кг',
      'Максимальная дальность подачи смеси: 100/200 м'
    ]
  },
  {
    id: 4,
    name: 'Meyco Piccola',
    image: '/products/meyco-piccola.jpg',
    description: 'Производительность: 0,5-4,0 м³/час',
    price: 1225000,
    country: 'Италия',
    features: [
      'Гарантия: 1 год',
      'Вес без принадлежностей: 450 кг',
      'Максимальная дальность подачи смеси: 100/200 м'
    ]
  },
  {
    id: 5,
    name: 'MPCS4',
    image: '/products/mpcs4.jpg',
    description: 'Производительность: 0,5-3,0 м³/час',
    price: 1300000,
    country: 'Словения',
    features: [
      'Гарантия: 1 год',
      'Вес без принадлежностей: 670 кг',
      'Максимальная дальность подачи смеси: 60/150 м'
    ]
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // Новое состояние для сортировки
  const [modalProduct, setModalProduct] = useState(null); // Открытое модальное окно

  // Получаем уникальные страны
  const countries = [...new Set(products.map(p => p.country))];

  // Фильтруем и сортируем продукты
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = filterCountry ? product.country === filterCountry : true;
      return matchesSearch && matchesCountry;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <main style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <section data-aos="fade-up">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#FFD700' }}>Наша продукция</h1>

        {/* Блок поиска, фильтра и сортировки */}
        <div className="filter-panel">
          <h2>Поиск и фильтрация</h2>
          <div className="filter-group">
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
            >
              <option value="">Все страны</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Без сортировки</option>
              <option value="asc">Сначала дешевые</option>
              <option value="desc">Сначала дорогие</option>
            </select>
          </div>
        </div>

        {/* Каталог продукции */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-card"
              data-aos="fade-up"
              onClick={() => setModalProduct(product)} // Открываем модальное окно
              style={{ cursor: 'pointer' }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0'
                }}
              />
              <div className="content">
                <h2>{product.name}</h2>
                <p><strong>Описание:</strong> {product.description}</p>
                <p><strong>Цена:</strong> {product.price.toLocaleString()} руб.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модальное окно */}
      {modalProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }} onClick={() => setModalProduct(null)}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '700px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalProduct(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#FFD700',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <img src={modalProduct.image} alt={modalProduct.name} style={{
              width: '100%',
              height: 'auto',
              marginBottom: '1rem',
              borderRadius: '8px'
            }} />
            <h2 style={{ marginBottom: '1rem' }}>{modalProduct.name}</h2>
            <p><strong>Описание:</strong> {modalProduct.description}</p>
            <p><strong>Цена:</strong> {modalProduct.price.toLocaleString()} руб.</p>
            <p><strong>Страна-производитель:</strong> {modalProduct.country}</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem' }}>
              {modalProduct.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;