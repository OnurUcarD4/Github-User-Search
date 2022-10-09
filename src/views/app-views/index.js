import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const AboutMe = React.lazy(() => import("./AboutMe"));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
export default AppViews;
