import { memo } from 'react';

const ReactMemoSiblingComponent = memo(() => {
  console.log('render');
  return (
    <div>
      <ul>
        <li>sdagsadg</li>
        <li>gdfhdf</li>
        <li>sdgjsdj</li>
      </ul>
    </div>
  );
});

export default ReactMemoSiblingComponent;
