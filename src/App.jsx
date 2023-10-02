import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrderButton";
import { action as createOrderAction } from "./features/order/CreateOrder";

import Loader from "./ui/Loader";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./ui/Home"));
const Menu = lazy(() => import("./features/menu/Menu"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Order = lazy(() => import("./features/order/Order"));
const CreateOrder = lazy(() => import("./features/order/CreateOrder"));
const Error = lazy(() => import("./ui/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
