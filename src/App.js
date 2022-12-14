import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="bg-base-300">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
