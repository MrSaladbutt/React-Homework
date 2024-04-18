// 1) useMemo:
// Створіть компонент, який містить список чисел. Використовуючи хук useMemo, обчисліть суму всіх чисел у списку та відображайте її
// на сторінці. Переконайтеся, що обчислення суми відбувається тільки при зміні списку чисел.
// 2) React.memo()::
// Створіть компонент, який містить список елементів. Кожен елемент має кнопку "Видалити", яка видаляє елемент зі списку. Поруч
// створіть ще один компонент, і зробіть так, щоб при видаленні елементу не було ререндеру компоненту який це не потребує.
// 3) Кастомні хуки:
// Створіть свій власний кастомний хук. Наприклад, створіть хук useWindowWidth, який буде повертати поточну ширину вікна
// браузера. Використайте хук useEffect для прослуховування події зміни розміру вікна та оновлення ширини. Використайте цей
// кастомний хук у своєму компоненті та виведіть ширину на сторінку.

import ReactMemoComponent from './ReactMemoComponent';
import './App.css';
import UseMemoComponent from './UseMemoComponent';
import CustomHookComponent from './CustomHookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseMemoComponent />
        <ReactMemoComponent />
        <CustomHookComponent />
      </header>
    </div>
  );
}

export default App;
