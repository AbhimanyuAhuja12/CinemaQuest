import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";
import About from "./About";
import LandingPage from '../Components/LandingPageUI/LandingPage'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/browse/:id",
      element: <MoviePage />,
    },
    {
      path: "/about",
      element: <About />,
    },

    { path: "/sign-in",
      element: <Login /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
