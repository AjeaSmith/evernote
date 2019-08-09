import React, { useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { StateContext } from "../StateContext";
const CodeEditor = () => {
  const [state, setState] = useContext(StateContext);
  const stateChange = editorState => {
    setState({ ...state, editorState: editorState });
  };
  return (
    <React.Fragment>
      <Editor
        editorState={state.editorState}
        onEditorStateChange={stateChange}
        placeholder="Write something amazing"
        wrapperStyle={{
          border: "1px solid grey",
          margin: "0.8em",
          height: "520px",
          overflowY: "auto"
        }}
        toolbarStyle={{ background: "#e6e6e6" }}
        editorStyle={{ padding: "0.8em" }}
      />
    </React.Fragment>
  );
};
export default CodeEditor;
