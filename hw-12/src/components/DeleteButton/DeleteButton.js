import { BeatLoader } from "react-spinners";
import deleteButton from "./deleteButton.module.css";
import { useContext } from "react";
import { QueryContext } from "../../context/QueryContext";

const DeleteButton = ({ onClick }) => {
  const { isPostLoading } = useContext(QueryContext);
  return (
    <button onClick={onClick} className={deleteButton.btn}>
      {isPostLoading ? <BeatLoader width={10} color="#ffff" /> : "Видалити"}
    </button>
  );
};

export default DeleteButton;
