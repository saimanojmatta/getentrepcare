import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import { router } from "./router"
import HomePage from "./components/homepage";
import DiagnosticTest from "./components/diagnostic-test";
import PaymentStatus from "./components/Payment-status";

const UI = () => {
  // return <RouterProvider router={router} />
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="*" element={<>Page Not found</>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnostic-test" element={<DiagnosticTest />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default UI;
