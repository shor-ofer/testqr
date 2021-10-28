import * as React from "react";
import { render } from "react-dom";
var QRCode = require("qrcode.react");

import "./styles.css";

var myurl = "https://shorofer.wixsite.com/xmmos";
function App() {
  return (
    <div className="App">
      <div className="qrtest">
        <a href={myurl}>
          <QRCode size="120" includeMargin="true" value={myurl} />
        </a>
      </div>
      <h1>Hello CodeSandbox test123</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
