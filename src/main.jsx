import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import "./output.css";
import "./input.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Loader() {
  return (
    <div className="absolute h-full w-full z-40 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
