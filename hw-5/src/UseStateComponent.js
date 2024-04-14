// 3) useState:
// Створіть компонент, який використовує хук useState. При натисканні на кнопку нехай виводиться рандомно
// фразу “Hello …”, де “…” буде рандомне імʼя, додайте мінімум 5 імен.

import { useState } from 'react';

function UseStateComponent() {
  const names = ['John', 'Sarah', 'Olexii', 'Olexandr', 'Johan', 'Ann', 'Jack'];
  const randomId = Math.floor(Math.random() * 7);
  const randomName = names[randomId];
  const [phrase, setPhrase] = useState('');

  const handleClick = () => {
    setPhrase(<p>Hello: {randomName}</p>);
  };

  return (
    <div>
      <h2>UseStateComponent</h2>
      {phrase}
      <button onClick={handleClick}>Show Phrase</button>
    </div>
  );
}

export default UseStateComponent;
