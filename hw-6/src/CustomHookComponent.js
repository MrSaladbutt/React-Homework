import { UseWindowWidth } from './UseWindowWidth';

function CustomHookComponent() {
  const { width } = UseWindowWidth(window.innerWidth);
  return (
    <div>
      <h2>CustomHook Component</h2>
      <p>Ширина вікна:{width}</p>
    </div>
  );
}

export default CustomHookComponent;
