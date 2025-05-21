import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Input from "./components/Input";
import Text from "./components/Text";
import List from "./components/List";
import { Children } from "react";
import PageNotFound from "./components/PagenotFound";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", index: true, element: <Input /> },
        { path: "text", element: <Text /> },
        {
          path: "list",
          element: <List list={[]} />,
          children: [
            {
              path: "item",
              element: <List />,
            },
          ],
        },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return (
    <>
      {/* <Input /> */}
      {/* <Text text="Deepak" />
      <Text text="Suraj" />
      <Text text="Naha" />
      <Text text="Poojitha" />
      <Text text="Kumar" /> */}
      {/* <Routes>
        <Route path="/" index element={<Input />} />
        <Route path="/text" element={<Text />} />
        <Route path="/list" element={<List />}>
          <Route path="item" element={<List />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;

// hooks => functions in react to perform complex task
// in v16.8
