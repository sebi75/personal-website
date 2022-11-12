import { useEffect, useState } from 'react';

const useLocalStorage = (key: 'dark-theme', initialValue = false) => {
  const [item, setItem] = useState('');
  const [storedValue, setStoredValue] = useState(() => {
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: boolean) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  //fix nextjs serverside render error
  useEffect(() => {
    setItem(window.localStorage.getItem(key));
  }, [key]);

  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme');
  const isEnabled = enabled;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
