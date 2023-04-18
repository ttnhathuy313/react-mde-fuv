import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { TextAreaTextController } from "../src";
import { Editor } from "./editor";
import Preview from "./preview";

export const Demo = () => {

  const [textController, setTextController] =
    React.useState<TextAreaTextController | null>(null);

  const updateRef = (newRef: TextAreaTextController | null) => {
    setTextController(newRef);
    console.log(newRef?.getState())
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Editor callback={updateRef} />} />
          <Route path="/preview" element={<Preview textController={textController} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));

export default Demo;
