import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Root from "./pages/Root";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ErrorPage from "./pages/Error";
const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const DetailPage = lazy(() => import("./pages/Detail"));
const CartPage = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const HistoryPage = lazy(() => import("./pages/History"));
const OrderDetail = lazy(() => import("./components/OrderHistory/OrderDetail"));
const OrderTable = lazy(() => import("./components/OrderHistory/OrderTable"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => import("./pages/Home").then((module) => module.loader()),
      },
      {
        path: "shop",
        element: <ShopPage />,
        loader: () => import("./pages/Shop").then((module) => module.loader()),
      },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: ({ params }) =>
          import("./pages/Detail").then((module) => module.loader({ params })),
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: () => import("./pages/Cart").then((module) => module.loader()),
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
        loader: () => import("./pages/Cart").then((module) => module.loader()),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
        children: [
          {
            index: true,
            element: <OrderTable />,
            loader: ({ params }) =>
              import("./pages/History").then((module) =>
                module.loader({ params })
              ),
          },
          {
            path: ":orderId",
            element: <OrderDetail />,
            loader: ({ params }) =>
              import("./pages/History").then((module) =>
                module.loader({ params })
              ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
