import AddUser from "./addUser/AddUser";
import AllUsers from "./allUsers/AllUsers";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUser from "./updateUser/UpdateUser";

function App() {

  let route = createBrowserRouter([
    {
      path: "/",
      element: <AllUsers />,
    },
    {
      path: "/add",
      element: <AddUser />
    },
    {
      path: "/update/:id",
      element: <UpdateUser />
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />

      {/* ✅ ADD THIS */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  );
}

export default App;