import React, { useState } from "react";

import TextEditor from "../TextEditor/TextEditor";
import CodeEditor from "../CodeEditor/CodeEditor";
import RadioForm from "../RadioForm/RadioForm";
import "./SnippetForm.css";

import { createSnippet } from "../api";

function SnippetForm({ parentId }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [example, setExample] = useState("");
  const [selectedValue, setSelectedValue] = useState("text");

  const handleSubmit = () => {
    console.log({ parentId, name, description, example });
    createSnippet({ parentId, name, description, example });
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <RadioForm
          title="select content type"
          radioList={["text", "code"]}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        {selectedValue === "text" ? (
          <TextEditor value={example} setValue={setExample} />
        ) : (
          <CodeEditor data={example} setData={setExample} disabled={false} />
        )}

        <button onClick={handleSubmit}>Create Snippet</button>
      </form>
    </div>
  );
}

export default SnippetForm;
