import type React from "react";
import Layout from "./app/Layout";
import { Routes, Route } from "react-router-dom";

function App({ children }: { children?: React.ReactNode }) {
  return (
    <Routes>
      <Route path="/*" element={<Layout>{children}</Layout>} />
    </Routes>
  );
}

export default App;
