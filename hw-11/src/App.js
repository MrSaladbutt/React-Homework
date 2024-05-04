import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import { RingLoader } from 'react-spinners';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import { useQuery } from 'react-query';
import { getUsers } from './api/api';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const Home = lazy(() => import('./pages/Home/Home'));
const ToDolist = lazy(() => import('./pages/ToDoList/ToDoList'));
const About = lazy(() => import('./pages/About/About'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const TaskPage = lazy(() => import('./pages/task-page/TaskPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: '', email: '' });
  const { data, isFetching } = useQuery({
    queryKey: ['usersList'],
    queryFn: getUsers,
  });

  if (isFetching) {
    return <RingLoader style={{ textAlign: 'center' }} color="#DEB887" />;
  }

  return (
    <div className="App" id="app">
      <Suspense fallback={<RingLoader color="#DEB887" />}>
        <Routes>
          <Route
            path="/"
            element={<Layout user={user} isAuthenticated={isAuthenticated} />}
          >
            <Route index element={<Home />} />
            <Route
              path="/todo-list"
              element={
                <PrivateRoutes isAuthenticated={isAuthenticated}>
                  <ToDolist />
                </PrivateRoutes>
              }
            />
            <Route
              path="/todo-list/:id"
              element={
                <PrivateRoutes isAuthenticated={isAuthenticated}>
                  <TaskPage />
                </PrivateRoutes>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoutes isAuthenticated={isAuthenticated}>
                  <About />
                </PrivateRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage
                  user={user}
                  setUser={setUser}
                  data={data}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/error-page" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
