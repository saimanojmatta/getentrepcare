import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import DiagnosticTest from "./components/diagnostic-test";
import PaymentStatus from "./components/Payment-status";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diagnostic-test",
    element: <DiagnosticTest />,
  },
  {
    path: "/payment-status",
    element: <PaymentStatus />,
  },
]);
