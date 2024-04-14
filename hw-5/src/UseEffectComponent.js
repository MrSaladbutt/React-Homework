// 1) useEffect:
// Створіть компонент, який використовує хук useEffect. При кожному оновленні компонента хук useEffect
// має викликатися і виводити повідомлення в консоль. Перевірте, що повідомлення виводяться під час
// рендерингу компонента та після його оновлення. (Оновлювати компонент маєте будь як)

import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [text, setText] = useState('UseEffect Component');

  const handleClick = () => {
    setText('UseEffect Component Updated');
  };

  const handleClickReturn = () => {
    setText('UseEffect Component');
  };

  useEffect(() => {
    console.log('Component Updated');
  }, [text]);

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleClick}>Update</button>
      <button onClick={handleClickReturn}>Return</button>
    </div>
  );
}

export default UseEffectComponent;
