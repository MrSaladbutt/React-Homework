import themeButtonStyle from './themeButton.module.css';
import { useTheme } from './useTheme';
import { useState, useRef, useEffect } from 'react';

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [check, setCheck] = useState(false);
  const inputRef = useRef();

  const handleLigthTheme = () => {
    setTheme('theme-light');
  };

  const handleDarkTheme = () => {
    setTheme('theme-dark');
  };

  const onChangeHandler = () => {
    setCheck(!check);
    if (inputRef.current.checked) {
      handleDarkTheme();
    } else {
      handleLigthTheme();
    }
  };

  useEffect(() => {
    if (theme === 'theme-dark') {
      setCheck(true);
    }
  }, [theme]);

  return (
    <label className={themeButtonStyle.switch}>
      <input
        ref={inputRef}
        type="checkbox"
        checked={check}
        onChange={onChangeHandler}
      />
      <span className={themeButtonStyle.slider}></span>
    </label>
  );
}

export default ThemeButton;
