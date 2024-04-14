// 2) useLayoutEffect:
// Створіть компонент, який використовує хук useLayoutEffect. У цьому хуці ви можете змінювати DOM
// безпосередньо. Створіть кнопку, яка при натисканні додає абзац до сторінки, використовуючи useLayoutEffect.
// Перевірте, що зміни відображаються миттєво після натискання кнопки.

import { useLayoutEffect, useState } from 'react';

function UseLayoutEffectComponent() {
  const [heading, setHeading] = useState('UseLayoutEffect Component');
  const [paragraph, setParagraph] = useState('');
  const p = [
    <p>
      ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptas ab
      neque molestiae amet voluptate distinctio deleniti rem! Blanditiis
      deleniti at eius dolorem dolore voluptatem perspiciatis. Consequuntur iste
      maiores esse.
    </p>,
  ];

  useLayoutEffect(() => {
    if (heading === 'UseLayoutEffect Component') {
      setParagraph('');
    } else {
      setParagraph(p);
    }
    console.log('Update UseLayoutEffect Component');
  }, [heading]);

  return (
    <div>
      <h2>{heading}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        voluptas ab neque molestiae amet voluptate distinctio deleniti rem!
        Blanditiis deleniti at eius dolorem dolore voluptatem perspiciatis.
        Consequuntur iste maiores esse.
      </p>
      {paragraph}
      <button onClick={() => setHeading('UseLayoutEffect Component Updated')}>
        Add text
      </button>
    </div>
  );
}

export default UseLayoutEffectComponent;
