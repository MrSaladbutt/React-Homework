// 4) useReducer:
// Створіть компонент, який використовує хук useReducer. Додайте 3 кнопки “Імʼя”, “Пвізвище”, “Рік народження”.
// Додайте аналогічні 3 текстові поля “input”. initialState = {name: ‘’, lastName: ‘’, birthYear: ‘’}. Після вводу в текстове
// поле з іменем і натискання на кнопку “Імʼя”, має додати введений текст в обʼєкт поле “name”, і т.д. Виведіть
// обʼєкт на екран.

import { useReducer, useState } from 'react';

function UseReducerComponent() {
  const initialState = { name: '', lastName: '', birthYear: '' };
  const [inputFirst, setInputFirst] = useState('');
  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');
  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: inputFirst };
      case 'lastName':
        return { ...state, lastName: inputSecond };
      case 'birthYear':
        return { ...state, birthYear: inputThird };
      default:
        return { ...state };
    }
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  const handleClick = type => {
    dispatch(type);
  };

  const onChangeHandlerFirst = event => {
    const target = event.target;
    setInputFirst(target.value);
  };

  const onChangeHandlerSecond = event => {
    const target = event.target;
    setInputSecond(target.value);
  };

  const onChangeHandlerThird = event => {
    const target = event.target;
    setInputThird(target.value);
  };

  return (
    <div className="use-reduser-component">
      <h2>UseReducer Component</h2>
      <div>
        <input type="text" name="1" onChange={onChangeHandlerFirst} />
        <button onClick={() => handleClick({ type: 'name' })}>Імʼя</button>
      </div>
      <div>
        <input type="text" name="2" onChange={onChangeHandlerSecond} />
        <button onClick={() => handleClick({ type: 'lastName' })}>
          Прізвище
        </button>
      </div>
      <div>
        <input type="number" name="3" onChange={onChangeHandlerThird} />
        <button onClick={() => handleClick({ type: 'birthYear' })}>
          Рік народження
        </button>
        <p>Імʼя: {value.name}</p>
        <p>Прізвище: {value.lastName}</p>
        <p> Рік народження: {value.birthYear} </p>
      </div>
    </div>
  );
}

export default UseReducerComponent;
