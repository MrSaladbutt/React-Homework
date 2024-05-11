import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { RingLoader } from "react-spinners";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { useQuery } from "react-query";
import { getUsers } from "./api/api";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import { QueryContext } from "./context/QueryContext";
import { PostLoadingContext } from "./context/PostLoadingContext";

const Home = lazy(() => import("./pages/Home/Home"));
const ToDolist = lazy(() => import("./pages/ToDoList/ToDoList"));
const About = lazy(() => import("./pages/About/About"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const TaskPage = lazy(() => import("./pages/task-page/TaskPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("login"),
    !!localStorage.getItem("email")
  );
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [user, setUser] = useState({ username: "", email: "" });
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["usersList"],
    queryFn: getUsers,
  });

  if (isFetching) {
    return (
      <RingLoader
        style={{ position: "absolute", top: "50%", left: "50%" }}
        color="#DEB887"
      />
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <QueryContext.Provider value={{ error, refetch }}>
          <PostLoadingContext.Provider
            value={{ isPostLoading, setIsPostLoading }}
          >
            <div className="App" id="app">
              <Suspense
                fallback={
                  <RingLoader
                    style={{ position: "absolute", top: "50%", left: "50%" }}
                    color="#DEB887"
                  />
                }
              >
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                      path="/todo-list"
                      element={
                        <PrivateRoutes>
                          <ToDolist />
                        </PrivateRoutes>
                      }
                    />
                    <Route
                      path="/todo-list/:id"
                      element={
                        <PrivateRoutes>
                          <TaskPage />
                        </PrivateRoutes>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <PrivateRoutes>
                          <About />
                        </PrivateRoutes>
                      }
                    />
                    <Route path="/login" element={<LoginPage data={data} />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/error-page" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </PostLoadingContext.Provider>
        </QueryContext.Provider>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
