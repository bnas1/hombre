// App.js
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy loading components
const LazyHome = React.lazy(() =>
  Promise.all([
    import("./components/Home"),
    new Promise((resolve) => setTimeout(resolve, 1000)), // Simulate 1 seconds delay
  ]).then(([moduleExports]) => moduleExports)
);
const LazyColliers = React.lazy(() =>
  Promise.all([
    import("./components/Colliers"),
    new Promise((resolve) => setTimeout(resolve, 1000)), // Simulate 1 seconds delay
  ]).then(([moduleExports]) => moduleExports)
);


function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/colliers" element={<LazyColliers />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
