import aboutStyles from './about.module.css';

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <h2 className={aboutStyles.title}>Про застосунок</h2>
      <p className={aboutStyles.text}>
        Цей додаток використовується для поліпшення організації, графіку або
        просто для зручності у повсякденному житті. Додаток створено на
        JavaScript за допомогою технології React. Були використані багато
        інстументів та бібліотек, такі як React-router-dom, React Hook Forms,
        axios, lodash, React-query, React-spinners а також технологій HTML та
        CSS. Додаток підключаєтсья до бази данних яка знаходиться на сервері та
        може змінювати базу данних додаючи, видаляючи, змінюючи її. Усі
        завантаження та помилки оброблені.
      </p>
      <p className={aboutStyles.text}>
        Автор проєкту Гудожник Олексій, починаючий розробник.
      </p>
    </div>
  );
};

export default About;
