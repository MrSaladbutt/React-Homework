// 5) useRef:
// Створіть компонент, який використовує хук useRef. Створіть текстове поле та кнопку “Фокус" та “Блюр”. При
// натисканні на кнопку “Фокус”, фокус повинен переміститися в текстове поле за допомогою хука useRef. При
// натисканні на кнопку “Блюр”, фокус має відмінитись із текстового поля.

import { useRef } from 'react';

function UseRefComponent() {
  const inputRef = useRef();

  const focusRef = () => {
    inputRef.current.focus();
  };

  const blurRef = () => {
    inputRef.current.blur();
  };

  return (
    <div>
      <h2>UseRef Component</h2>
      <input type="text" ref={inputRef} />
      <button onClick={focusRef}>Фокус</button>
      <button onClick={blurRef}>Блюр</button>
    </div>
  );
}

export default UseRefComponent;
