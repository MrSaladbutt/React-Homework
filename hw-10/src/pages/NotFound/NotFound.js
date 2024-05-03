import { Link } from 'react-router-dom';
import errorStyles from './notfound.module.css';

const NotFound = () => {
  return (
    <div className={errorStyles.container}>
      <h2 className={errorStyles.title}>Помилка!!! Невірна адреса або запит</h2>
      <Link className={errorStyles.link} to="/">
        Повернутись на головну сторінку
      </Link>
    </div>
  );
};

export default NotFound;
