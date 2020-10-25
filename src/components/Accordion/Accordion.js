import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import AccordionElement from "./AccordionElement";
import SnippetForm from "../SnippetForm/SnippetForm";
import { getData } from "../api";
import LightBox from "../LightBox/LightBox";

import "./Accordion.css";

function Accordion() {
  const { parentId } = useParams();
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLightBox, setShowLightBox] = useState(false);

  const initData = useCallback(() => {
    console.log("dfasdfasdfadsfas");
    getData(parentId, true).then((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        setSnippets(response);
      }
      setLoading(false);
    });
  }, [parentId]);

  useEffect(() => {
    initData();
  }, [initData, parentId]);

  const showEmptySnippets = () =>
    snippets.length === 0 && !loading ? <h2>No Snippets</h2> : "";

  const showLoading = () => (loading ? <h2>Loading ...</h2> : "");

  const lightBox = () => (
    <LightBox showLightBox={showLightBox} setShowLightBox={setShowLightBox}>
      <SnippetForm parentId={parentId} />
    </LightBox>
  );

  const createSnippetButton = () =>
    !loading && (
      <button onClick={() => setShowLightBox(true)}>create snippet</button>
    );

  const header = () =>
    !loading && (
      <div className="header">
        <h2>Snippets</h2>
        {createSnippetButton()}
      </div>
    );

  return (
    <div className="accordion">
      {showEmptySnippets()}
      {showLoading()}
      {header()}
      <ul>
        {snippets.map((snippet, i) => (
          <AccordionElement key={i} snippet={snippet} />
        ))}
      </ul>
      {lightBox()}
    </div>
  );
}

export default Accordion;
