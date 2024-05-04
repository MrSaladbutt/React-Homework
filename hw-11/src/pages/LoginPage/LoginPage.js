import { useState } from 'react';
import login from './login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ data, setIsAuthenticated, user, setUser }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const userData = data.find(
      obj => obj.username === user.username && obj.email === user.email,
    );
    if (userData) {
      setIsAuthenticated(true);
      navigate('/todo-list', { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={login.login}>
      <h2 className={login.title}>Login</h2>
      <form onSubmit={handleLogin} className={login.form}>
        <div className={login.formfield}>
          <label className={login.label} htmlFor="username">
            Username
          </label>
          <input
            value={user.username}
            onChange={e =>
              setUser({
                username: e.target.value,
                email: user.email,
              })
            }
            id="username"
            className={login.input}
            type="text"
          />
        </div>
        <div className={login.formfield}>
          <label className={login.label} htmlFor="email">
            Email
          </label>
          <input
            value={user.email}
            onChange={e =>
              setUser({
                username: user.username,
                email: e.target.value,
              })
            }
            id="email"
            className={login.input}
            type="email"
          />
        </div>
        <button type="submit" className={login.button}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
