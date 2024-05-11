import listStyles from "./toDoList.module.css";
import ToDoListItems from "../../components/ToDoListItems/ToDoListItems";
import { RingLoader } from "react-spinners";
import { AddToDoInfo } from "../../components/AddToDoInfo/AddToDoInfo";
import { useQuery } from "react-query";
import { getTodoList } from "../../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDolist = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });

  const [isTasks, setIsTasks] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetching && data && data.length === 0) {
      setIsTasks(false);
    }
  }, [isFetching, data]);

  const handleClick = () => {
    setIsTasks(true);
  };

  if (error) {
    navigate("/error-page", { replace: true });
  }

  return (
    <div className={listStyles.container}>
      <h1 className="main-header">ToDo List</h1>
      {data && data.length > 0 ? (
        <>
          <AddToDoInfo />
          <ul className={listStyles.ul}>
            {isFetching ? (
              <RingLoader
                style={{ position: "absolute", top: "50%", left: "50%" }}
                color="#DEB887"
                loading={isFetching}
              />
            ) : (
              data.map((task, index) => (
                <ToDoListItems key={index} task={task} />
              ))
            )}
          </ul>
        </>
      ) : isTasks ? (
        <AddToDoInfo />
      ) : (
        <div className={listStyles.notasks}>
          <p>Наразі у вас ще немає завдань</p>
          <button onClick={handleClick} className={listStyles.btn}>
            Додати завдання
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDolist;
