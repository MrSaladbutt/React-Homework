import { BeatLoader } from 'react-spinners';
import deleteButton from './deleteButton.module.css';

const DeleteButton = ({ onClick, isPostLoading }) => {
  return (
    <button onClick={onClick} className={deleteButton.btn}>
      {isPostLoading ? <BeatLoader width={10} color="#ffff" /> : 'Видалити'}
    </button>
  );
};

export default DeleteButton;
