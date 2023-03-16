import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Error from "./component/Error";
import About from "./component/Offer";
import Profile from "./component/Profile";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Offer from "./component/Offer";
import Shimmer from "./component/Shimmer";
const Instamart = lazy(() => import("./component/Instamart"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <Body
            user={{ name: "Brajesh", email: "brajeshkumar997@gmail.com" }}
          />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
