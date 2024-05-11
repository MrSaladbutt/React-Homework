import { BeatLoader } from "react-spinners";
import addButton from "./addButton.module.css";
import { useContext } from "react";
import { PostLoadingContext } from "../../context/PostLoadingContext";

const AddButton = ({ addToDo }) => {
  const { isPostLoading } = useContext(PostLoadingContext);
  return (
    <button
      disabled={isPostLoading}
      onClick={addToDo}
      className={addButton.btn}
    >
      {isPostLoading ? (
        <BeatLoader width={10} color="#ffff" />
      ) : (
        "Додати завдання"
      )}
    </button>
  );
};

export default AddButton;
