
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root';
import HomePage from './pages/home';
import Food from './pages/food';
import HomeStatr from './pages/home-statr';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Basket from './pages/basket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomeStatr/>
      },
      {
        path: '/:restaurentId',
        element: <HomePage/>
      },
      {
        path: '/:restaurentId/food',
        element: <Food/>
      },
      {
        path: '/:restaurentId/basket',
        element: <Basket/>
      }
    ]
  }
])



const App = () => {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />  
      </QueryClientProvider>
    </div>
  );
};

export default App;