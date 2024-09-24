import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MoviePage from './MoviePage';
import About from './About';


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
      element: <MoviePage />
    },
    {
      path:"/about",
      element:<About/>
    }
  ]);




  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
