import React from "react";
import "./App.scss";
import {Panel} from "./Components";

function App() {
  return (
    <div>
      <Panel
        items={[{ text: "Todo" }, { text: "Todo2" }, { text: "Todo 3" }]}
      />
    </div>
  );
}

export default App;
