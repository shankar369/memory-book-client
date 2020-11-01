import React, { useState } from "react";
import "./Accordion.css";
import CodeEditor from "../CodeEditor/CodeEditor";
import { updateSnippet } from "../api";
import TextEditor from "../TextEditor/TextEditor";

function AccordionElement({ snippet }) {
  const [example, setExample] = useState(snippet.example);
  const [description, setDescription] = useState(snippet.description);

  const [showAccordionData, setShowAccordionData] = useState("");
  const [disabled, setDisabled] = useState("nocursor");
  const [editState, setEditState] = useState(false);
  const snippetType = snippet.snippetType;

  const saveUpdatedSnippet = () => {
    updateSnippet(snippet._id, { example, description }).then((response) => {
      if (response.error) {
        console.log("update snippet err :", response.error);
      } else {
        console.log(response);
        snippet = response;
      }
    });
  };

  const handleClick = (e) => {
    setShowAccordionData(showAccordionData === "show" ? "hide" : "show");
  };

  const handleButtonClick = (name) => (e) => {
    switch (name) {
      case "edit":
        setDisabled(disabled === false ? "nocursor" : false);
        setEditState(!editState);
        console.log("edit");
        break;
      case "save":
        console.log("save");
        saveUpdatedSnippet();
        break;
      case "cancel":
        console.log("cancel");
        setEditState(!editState);
        setDisabled("nocursor");
        setExample(snippet.example);
        setDescription(snippet.description);
        break;
      default:
        break;
    }
  };

  // const handleChange = (editor, data, value) => {
  //   setExample(value);
  // };

  const button = () =>
    !editState && (
      <button name="edit" onClick={handleButtonClick("edit")}>
        Edit
      </button>
    );

  const saveCancelButtons = () =>
    editState && (
      <div className="button-group">
        <button name="save" onClick={handleButtonClick("save")}>
          save
        </button>
        <button name="cancel" onClick={handleButtonClick("cancel")}>
          cancel
        </button>
      </div>
    );

  const snippetData = () => (
    <div className={`item-data ${showAccordionData}`}>
      <div className="description">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          disabled={disabled === false ? false : true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {snippetType === "code" ? (
        <CodeEditor data={example} setData={setExample} disabled={disabled} />
      ) : (
        <TextEditor
          value={example}
          setValue={setExample}
          readOnlyMode={!editState}
        />
      )}
      {button()}
      {saveCancelButtons()}
    </div>
  );

  return (
    <li className="list-item">
      <div className="list-title" onClick={handleClick}>
        {snippet.name}
      </div>
      {snippetData()}
    </li>
  );
}

export default AccordionElement;
