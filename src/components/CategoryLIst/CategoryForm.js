import React, { useState } from "react";
import "./Category.css";
import RadioForm from "../RadioForm/RadioForm";

import { createCategory } from "../api";

function SnippetForm({ parentId }) {
  const [name, setName] = useState("");
  const [hasSubCategory, setHasSubCategory] = useState("no");

  const handleSubmit = () => {
    setHasSubCategory(hasSubCategory === "true");
    console.log({ parentId, name, hasSubCategory });
    createCategory({ parentId, name, hasSubCategory });
  };

  const radioGroup = () => (
    // <div>
    //   <label>true</label>
    //   <input
    //     type="radio"
    //     value={true}
    //     checked={hasSubCategory === true}
    //     onChange={(e) => setHasSubCategory(true)}
    //   />
    //   <label>false</label>
    //   <input
    //     type="radio"
    //     value={false}
    //     checked={hasSubCategory === false}
    //     onChange={(e) => setHasSubCategory(false)}
    //   />
    // </div>
    <RadioForm
      title="Has Sub-Category"
      radioList={["yes", "no"]}
      selectedValue={hasSubCategory}
      setSelectedValue={setHasSubCategory}
    />
  );

  return (
    <div>
      <form className="category-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>{radioGroup()}</div>
        <button onClick={handleSubmit}>Create Category</button>
      </form>
    </div>
  );
}

export default SnippetForm;
