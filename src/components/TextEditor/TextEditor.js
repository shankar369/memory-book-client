import React from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

const TextEditor = ({ value, setValue, readOnlyMode = false }) => {
  const placeholder = "Start writing";

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  const modules = {
    syntax: true,
    toolbar: readOnlyMode
      ? !readOnlyMode
      : [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleChange = (html) => {
    setValue(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={value}
        modules={modules}
        formats={formats}
        bounds={".app"}
        placeholder={placeholder}
        readOnly={readOnlyMode}
      />
    </div>
  );
};

/*
 * PropType validation
 */
TextEditor.propTypes = {
  placeholder: PropTypes.string,
};

export default TextEditor;
