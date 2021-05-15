import React from "react";
import "./App.scss";
import { Panel } from "./Components";

function App() {
  return (
    <div className="app">
      <Panel
        carts={[{ text: "Todo" }, { text: "Todo2" }, { text: "Todo 3" }]}
      />
      <Panel carts={null} />
    </div>
  );
}

export default App;
