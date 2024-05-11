import { Link } from 'react-router-dom';

const ErrorPage = ({ message }) => {
  return (
    <div>
      <h1>Помилка серверу {message}!!!!</h1>
      <Link to="/">Повернутись на головну сторінку</Link>
    </div>
  );
};

export default ErrorPage;
