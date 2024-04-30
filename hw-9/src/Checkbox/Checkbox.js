const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
