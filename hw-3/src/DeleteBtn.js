function DeleteBtn(props) {
  return (
    <button type={props.type} onClick={props.onClick} className="btn-delete">
      {props.text}
    </button>
  );
}

export default DeleteBtn;
