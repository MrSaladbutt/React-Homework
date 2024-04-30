import './select.css';

const Select = ({ filter, handleSelectChange }) => {
  return (
    <select
      name="select"
      id="select"
      value={filter}
      onChange={handleSelectChange}
    >
      <option value="Всі">Всі</option>
      <option value="Активний">Активні</option>
      <option value="Завершений">Завершені</option>
    </select>
  );
};

export default Select;
