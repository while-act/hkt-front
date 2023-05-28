import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { store } from '../store/index';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'white') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'white');
    } else {
      localStorage.setItem('color-theme', 'dark');
    }
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
