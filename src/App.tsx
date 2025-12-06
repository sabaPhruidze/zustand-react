import { useState } from "react";
import { useCartStore } from "./store/store";
import "./App.css";

function App() {
  const cartCount = useCartStore((state) => state.increase);
  const currentValue = useCartStore((state) => state.cartCount);
  const resetButton = useCartStore((state) => state.reset);
  return (
    <div>
      <h1>{currentValue}</h1>
      <button onClick={cartCount}>Click me to increase</button>
      <button onClick={resetButton}>reset</button>
    </div>
  );
}

export default App;
