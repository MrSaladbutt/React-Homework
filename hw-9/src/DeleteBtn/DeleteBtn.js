import deleteBtnStyles from './deleteBtn.module.css';

const DeleteBtn = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={deleteBtnStyles.btnDelete}>
      {text}
    </button>
  );
};

export default DeleteBtn;
