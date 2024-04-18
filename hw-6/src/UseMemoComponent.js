import { useState, useMemo } from 'react';

function UseMemoComponent() {
  const [list, setList] = useState([1, 3, 6, 89, 2, 5, 6]);

  const handleClick = () => {
    setList([...list, list.length + Math.trunc(Math.random() * 10)]);
  };

  const memoizedSum = useMemo(() => {
    const numberSum = arr => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    };
    numberSum(list);

    return numberSum(list);
  }, [list]);

  console.log('render');
  return (
    <div>
      <h2>UseMemo Component</h2>
      <div className="numbers">
        <p>Список чисел:</p>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <button onClick={handleClick}>Додати число</button>
      <p>Сумма чисел: {memoizedSum}</p>
    </div>
  );
}

export default UseMemoComponent;
