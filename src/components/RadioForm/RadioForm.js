import React, { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import "./RadioForm.css";

const RadioForm = ({ title, radioList, selectedValue, setSelectedValue }) => {
  const onRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const radioButton = (name) => (
    <li>
      <label>
        <input
          type="radio"
          value={name}
          checked={selectedValue === name}
          onChange={onRadioChange}
        />
        <span>{name}</span>
      </label>
    </li>
  );

  return (
    <div>
      <strong>{title}</strong>
      <ul>{radioList.map((name, i) => radioButton(name))}</ul>
    </div>
  );
};

export default RadioForm;
