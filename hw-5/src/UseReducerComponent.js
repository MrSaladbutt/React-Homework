// 4) useReducer:
// Створіть компонент, який використовує хук useReducer. Додайте 3 кнопки “Імʼя”, “Пвізвище”, “Рік народження”.
// Додайте аналогічні 3 текстові поля “input”. initialState = {name: ‘’, lastName: ‘’, birthYear: ‘’}. Після вводу в текстове
// поле з іменем і натискання на кнопку “Імʼя”, має додати введений текст в обʼєкт поле “name”, і т.д. Виведіть
// обʼєкт на екран.

import { useReducer, useState } from 'react';

function UseReducerComponent() {
  const initialState = { name: '', lastName: '', birthYear: '' };
  const [input, setInput] = useState('');
  const reduser = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: input };
      case 'lastName':
        return { ...state, lastName: input };
      case 'birthYear':
        return { ...state, birthYear: input };
      default:
        return { ...state };
    }
  };
  const [value, dispatch] = useReducer(reduser, initialState);

  const handleClick = type => {
    dispatch(type);
  };

  const onChangeHandler = event => setInput(event.target.value);

  return (
    <div className="use-reduser-component">
      <h2>UseReducer Component</h2>
      <div>
        <p>Імʼя: {value.name}</p>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={() => handleClick({ type: 'name' })}>Імʼя</button>
      </div>
      <div>
        <p>Прізвище: {value.lastName}</p>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={() => handleClick({ type: 'lastName' })}>
          Прізвище
        </button>
      </div>
      <div>
        <p> Рік народження: {value.birthYear} </p>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={() => handleClick({ type: 'birthYear' })}>
          Рік народження
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;
