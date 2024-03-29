import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddItem from "./pages/AddItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: '/add',
      element: <AddItem />
    }
  ]);

  // const isLogin = useSelector(state => state.login.isLogin)

  return (
    <>
      <RouterProvider router={router} />
      {/* {isLogin ? <Home /> : <Login />} */}
    </>
  );
}

export default App;
