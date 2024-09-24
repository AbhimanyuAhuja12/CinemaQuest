import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MoviePage from './MoviePage';


const Body = () => {


  const appRouter = createBrowserRouter([
    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path:"/",
        element:<Login/>
    },
    {
      path: "/browse/:id",
      element: <MoviePage />,
    },
  ]);




  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
