import React from 'react';
// Импорт библиотеки
// import * as emailjs from 'emailjs';

const Contacts = () => {
  const sendEmail = (e) => {
    // e.preventDefault();

    // // Объект параметров из формы
    // const templateParams = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   topic: e.target.topic.value,
    //   message: e.target.message.value,
    // };

    // emailjs.send(
    //   'YOUR_SERVICE_ID',     // замени на свой Service ID
    //   'YOUR_TEMPLATE_ID',    // замени на свой Template ID
    //   templateParams,
    //   'YOUR_PUBLIC_KEY'      // замени на свой Public Key
    // )
    // .then(() => {
    //   alert('Сообщение успешно отправлено!');
    // })
    // .catch((error) => {
    //   console.error('Ошибка:', error.text);
    //   alert('Произошла ошибка при отправке сообщения.');
    // });

    // e.target.reset(); // Сброс формы
  };

  return (
    <main style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <section data-aos="fade-up">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#FFD700' }}>Свяжитесь с нами</h1>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Для обсуждения сотрудничества свяжитесь с нами:</h2>
          <p><strong>Тел:</strong> +7 (905) 948-09-49</p>
          <p><strong>Email:</strong> sibcom_engineering@mail.ru</p>
          <p><strong>Время работы:</strong> Пн–Пт, 9:00–17:00</p>
          <p><strong>Адрес:</strong> г. Новосибирск, ул. Станционная, д. 10</p>
        </div>

        {/* Форма обратной связи */}
        <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Форма для связи</h2>
          <form onSubmit={sendEmail}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '.5rem' }} htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '.5rem' }} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '.5rem' }} htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                style={{
                  width: '100%',
                  padding: '.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '.5rem' }} htmlFor="topic">Тема обращения</label>
              <select
                id="topic"
                name="topic"
                required
                style={{
                  width: '100%',
                  padding: '.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              >
                <option value="">Выберите тему</option>
                <option value="Запрос на услугу">Запрос на услугу</option>
                <option value="Запрос на продукцию">Запрос на продукцию</option>
                <option value="Общие вопросы">Общие вопросы</option>
                <option value="Партнерство">Партнерство</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '.5rem' }} htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                style={{
                  width: '100%',
                  padding: '.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#FFD700',
                color: '#000',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Отправить
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacts;