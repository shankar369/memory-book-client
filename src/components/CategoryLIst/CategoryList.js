import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import LightBox from "../LightBox/LightBox";
import CategoryForm from "./CategoryForm";

import "./Category.css";

import { getData } from "../api";

const CategoryList = () => {
  const { parentId } = useParams();
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [showLightBox, setShowLightBox] = useState(false);

  const initData = useCallback(() => {
    getData(parentId).then((response) => {
      console.log(response);
      if (response.error) {
        console.log(response.error);
      } else {
        setCategories(response);
      }
      setLoading(false);
    });
  }, [parentId]);

  useEffect(() => {
    initData();
  }, [initData, parentId]);

  const handleClick = (parentId, hasSubCategory) => {
    setCategories([]);
    setLoading(true);
    if (hasSubCategory === "yes") {
      history.push(`/categories/${parentId}`);
    } else {
      history.push(`/snippets/${parentId}`);
    }
  };

  const showLoading = () => (loading ? <h2>Loading ...</h2> : "");

  const lightBox = () => (
    <LightBox showLightBox={showLightBox} setShowLightBox={setShowLightBox}>
      <CategoryForm parentId={parentId} />
    </LightBox>
  );

  const createCategoryButton = () =>
    !loading && (
      <button onClick={() => setShowLightBox(true)}>create category</button>
    );

  const header = () =>
    !loading && (
      <div className="header">
        <h2>Categories</h2>
        {createCategoryButton()}
      </div>
    );

  return (
    <div>
      {showLoading()}
      {header()}
      <ul className="categories">
        {categories.map((c, i) => (
          <li
            className="category-item"
            key={i}
            onClick={() => handleClick(c._id, c.hasSubCategory)}
          >
            {c.name}
          </li>
        ))}
      </ul>
      {/* <span role="textbox" contentEditable>
        hello
      </span> */}
      {lightBox()}
    </div>
  );
};

export default CategoryList;
