import React from "react";
import NewRoutes from "./Routes/NewRote";
import AdminRoute from "./Routes/AdminRoute";

// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NewRoutes />
      <AdminRoute/>
    </div>
  );
}

export default App;
