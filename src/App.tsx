import type React from "react";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-screen h-screen bg-red-300">{children}</div>
    </>
  );
}

export default App;
