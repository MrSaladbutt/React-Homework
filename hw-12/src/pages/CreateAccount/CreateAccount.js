import { useContext, useState } from "react";
import { generateId } from "../../utils";
import create from "./createAccount.module.css";
import { useMutation } from "react-query";
import { putUsers } from "../../api/api";
import { PostLoadingContext } from "../../context/PostLoadingContext";
import { QueryContext } from "../../context/QueryContext";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const payload = {
    id: generateId(10),
    username: username,
    email: email,
  };
  const { mutateAsync } = useMutation({
    mutationFn: (payload) => putUsers(payload),
  });
  const [addError, setAddError] = useState(null);
  const { setIsPostLoading } = useContext(PostLoadingContext);
  const { refetch } = useContext(QueryContext);
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      setIsPostLoading(true);
      await mutateAsync(payload);
      setUsername("");
      setEmail("");
      navigate("/login");
      await refetch();
      setIsPostLoading(false);
    } catch (error) {
      setIsPostLoading(false);
      setAddError(`Error: ${error.message}`);
    }
  };

  const enterPressHandler = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };
  return (
    <div className={create.login}>
      <h2 className={create.title}>Зареєструватись</h2>

      <div className={create.formfield}>
        <label className={create.label} htmlFor="username">
          Ім'я
        </label>
        <input
          id="username"
          className={create.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={enterPressHandler}
        />
      </div>
      <div className={create.formfield}>
        <label className={create.label} htmlFor="email">
          Пошта
        </label>
        <input
          id="email"
          className={create.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={enterPressHandler}
        />
      </div>
      <button type="submit" className={create.button} onClick={addUser}>
        Зареєструватись
      </button>

      {addError && <p style={{ color: "red" }}>{addError}</p>}
    </div>
  );
};

export default CreateAccount;
