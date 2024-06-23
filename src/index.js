import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <p>Hello from React !!!!</p>
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

