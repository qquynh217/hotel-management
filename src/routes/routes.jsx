import { createBrowserRouter } from "react-router-dom";
import Customers from "../pages/customers";
import MainLayout from "../pages/layout";
import Reservations from "../pages/reservation";
import Rooms from "../pages/rooms";
import Services from "../pages/services";
import Employees from "../pages/employee";

export const ROUTE_URL = {
  HOME: "/",
  ROOM: "/",
  CUSTOMER: "/customers",
  RESERVATION: "/reservations",
  SERVICE: "/service",
  EMPLOYEE: "/employee",
};

const routes = [
  {
    path: ROUTE_URL.HOME,
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_URL.ROOM,
        element: <Rooms />,
      },
      {
        path: ROUTE_URL.CUSTOMER,
        element: <Customers />,
      },
      {
        path: ROUTE_URL.RESERVATION,
        element: <Reservations />,
      },
      {
        path: ROUTE_URL.SERVICE,
        element: <Services />,
      },
      {
        path: ROUTE_URL.EMPLOYEE,
        element: <Employees />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
