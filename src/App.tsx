import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { routes } from "./routes/config";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
