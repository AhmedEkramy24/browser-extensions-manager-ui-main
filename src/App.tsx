import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import All from "./Components/All/All";
import Active from "./Components/Active/Active";
import InActive from "./Components/InActive/InActive";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <All />,
      },
      {
        path: "active",
        element: <Active />,
      },
      {
        path: "inactive",
        element: <InActive />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
