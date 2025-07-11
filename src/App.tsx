import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import All from "./Components/All/All";
import Active from "./Components/Active/Active";
import InActive from "./Components/InActive/InActive";
import ExtentionsContextProvider from "./Context/ExtentionsContext";

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
      <ExtentionsContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ExtentionsContextProvider>
    </>
  );
}
