import { BeatLoader } from 'react-spinners';
import addButton from './addButton.module.css';

const AddButton = ({ isPostLoading, addToDo }) => {
  return (
    <button
      disabled={isPostLoading}
      onClick={addToDo}
      className={addButton.btn}
    >
      {isPostLoading ? (
        <BeatLoader width={10} color="#ffff" />
      ) : (
        'Додати завдання'
      )}
    </button>
  );
};

export default AddButton;
