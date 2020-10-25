import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/mode/css/css";
import "codemirror/addon/display/autorefresh";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "./CodeEditor.css";

function CodeEditor({ data, setData, disabled }) {
  const handleChange = (editor, data, value) => {
    setData(value);
  };
  return (
    <div>
      <h2 className="title">Example</h2>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={data}
        options={{
          lineWrapping: true,
          lint: true,
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          readOnly: disabled,
          autoRefresh: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;
