import { BeatLoader } from 'react-spinners';
import editButton from './editButton.module.css';

const EditButton = ({ onClick, isPostLoading }) => {
  return (
    <button onClick={onClick} className={editButton.btn}>
      {isPostLoading ? <BeatLoader width={10} color="#ffff" /> : 'Редагувати'}
    </button>
  );
};

export default EditButton;
