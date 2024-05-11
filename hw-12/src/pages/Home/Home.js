import { Link } from 'react-router-dom';
import homeStyle from './home.module.css';

const Home = () => {
  return (
    <div className={homeStyle.container}>
      <h2 className={homeStyle.header}>Вітаємо у додатку ToDo List!</h2>
      <p className={homeStyle.description}>
        В цьому додатку ви можете створювати, редагувати, зберігати ваші
        особисті списки завдань. Додані завдання матимуть заголовок, опис,
        статус та дату створення.
      </p>
      <Link to="/todo-list" className={homeStyle.link}>
        Розпочати
      </Link>
    </div>
  );
};

export default Home;
