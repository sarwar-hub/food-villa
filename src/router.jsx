import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Home/Homepage";
import Menu from "./pages/Menu/Menu";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: '/',
            element: <Homepage></Homepage>
          },
          {
            path: 'menu',
            element: <Menu></Menu>
          }
        ]
    }
  ])
  export default router;