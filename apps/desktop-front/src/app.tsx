import { RouterProvider } from '@tanstack/react-router';
import router from './router';
import { ThemeProvider } from 'next-themes';
import './global.css';

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
