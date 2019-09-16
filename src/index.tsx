import * as React from "react";
import { render } from "react-dom";
var QRCode = require("qrcode.react");

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="qrtest">
        <a href="https://shorofer.wixsite.com/xmmos">
          <QRCode
            size="80"
            includeMargin="true"
            value="https://shorofer.wixsite.com/xmmos"
          />
        </a>
      </div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
