import { useState } from 'react';
import ReactMemoSiblingComponent from './ReactMemoSiblingComponent';

function ReactMemoComponent() {
  const el1 = <p>Element 1</p>;
  const el2 = <p>Element 2</p>;
  const el3 = <p>Element 3</p>;

  const [list, setList] = useState([
    { id: 1, name: el1 },
    { id: 2, name: el2 },
    { id: 3, name: el3 },
  ]);

  const deleteHandler = id => {
    const newItem = list.filter(item => item.id !== id);
    setList(newItem);
  };

  return (
    <div>
      <h2>ReactMemo Component</h2>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <div key={(item, index)}>
              <li key={index}>{item.name}</li>
              <button
                key={(index, item)}
                onClick={() => deleteHandler(item.id)}
              >
                Delete item
              </button>
            </div>
          );
        })}
      </ul>
      <ReactMemoSiblingComponent />
    </div>
  );
}

export default ReactMemoComponent;
