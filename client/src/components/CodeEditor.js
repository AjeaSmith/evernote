import React, { useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CodeEditor.css";
import { StateContext } from "../StateContext";
const CodeEditor = () => {
  const [state, setState] = useContext(StateContext);
  const stateChange = editorState => {
    setState({ ...state, editorState: editorState });
  };
  const onContentChange = contentState => {
    const blocks = contentState.blocks;
    setState({ ...state, contentState: blocks });
  };
  const uploadImageCallBack = file => {
    // long story short, every time we upload an image, we
    // need to save it to the state so we can get it's data
    // later when we decide what to do with it.

    // Make sure you have a uploadImages: [] as your default state
    let uploadedImages = state.uploadImages;
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file)
    };
    uploadedImages.push(imageObject);
    setState({ ...state, uploadImages: uploadedImages });
    // We need to return a promise with the image src
    // the img src we will use here will be what's needed
    // to preview it in the browser. This will be different than what
    // we will see in the index.md file we generate.
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };
  const saveData = () => {
    let editor = {
      title: "",
      content: "",
      image: ""
    };
    const { contentState, uploadImages } = state;
    contentState.map(data => {
      const { type, text } = data;
      if (type === "header-one") {
        editor.title = text;
      } else if (type === "unstyled") {
        editor.content += text;
      } else if (
        type === "header-two" ||
        "header-threww" ||
        "header-four" ||
        "header-five" ||
        "header-six"
      ) {
        editor.content += text;
      } else {
        editor.content += text;
      }
    });
    uploadImages.map(image => {
      const { name } = image.file;
      editor.image = name;
    });
  };
  return (
    <React.Fragment>
      <Editor
        onContentStateChange={onContentChange}
        editorState={state.editorState}
        onEditorStateChange={stateChange}
        placeholder="Write something amazing"
        wrapperStyle={{
          border: "1px solid grey",
          margin: "0.8em",
          height: "520px",
          overflowY: "auto"
        }}
        toolbar={{
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace"
            ]
          },
          list: {
            options: ["unordered", "ordered"]
          },
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true
          }
        }}
        toolbarStyle={{ background: "#e6e6e6" }}
        editorStyle={{ padding: "0.8em" }}
      />
      <button
        onClick={saveData}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-3"
      >
        Save Note
      </button>
    </React.Fragment>
  );
};
export default CodeEditor;
