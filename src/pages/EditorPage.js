import React, { useState, useEffect, useRef } from "react";
import { Editor, EditorState, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  FaUndo,
  FaRedo,
  FaPrint,
  FaPaintBrush,
  FaSearch,
  FaComment
} from "react-icons/fa";
import { Tooltip, Card } from "antd";
import { minHeight } from "@mui/system";
//import 'antd/dist/antd.css';

const EditorPage = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorRef = useRef(null);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    // Focus on the editor when the component mounts
    editorRef.current.focus();
  }, []);

  const toolbarIcons = [
    {
      icon: <FaUndo />,
      tooltip: "Undo",
      onClick: () => {
        // Handle undo functionality
      }
    },
    {
      icon: <FaRedo />,
      tooltip: "Redo",
      onClick: () => {
        // Handle redo functionality
      }
    },
    {
      icon: <FaPrint />,
      tooltip: "Print",
      onClick: () => {
        // Handle print functionality
      }
    },
    {
      icon: <FaPaintBrush />,
      tooltip: "Paint Format",
      onClick: () => {
        // Handle paint format functionality
      }
    },
    {
      icon: <FaSearch />,
      tooltip: "Spelling and Grammar",
      onClick: () => {
        // Handle spelling and grammar checking functionality
      }
    },
    {
      icon: <FaComment />,
      tooltip: "Add Comment",
      onClick: () => {
        // Handle add comment functionality
      }
    },
    {
      icon: <FaComment />,
      tooltip: "Zoom In",
      onClick: () => {
        // Handle zoom in functionality
      }
    },
    {
      icon: <FaComment />,
      tooltip: "Zoom Out",
      onClick: () => {
        // Handle zoom out functionality
      }
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#EAEAEA"
      }}
    >
      <Card style={{ width: "80%", maxWidth: "800px", borderRadius: "25px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginBottom: "10px"
          }}
        >
          {toolbarIcons.map((item) => (
            <Tooltip title={item.tooltip} key={item.tooltip}>
              <button className="toolbar-button" onClick={item.onClick}>
                {item.icon}
              </button>
            </Tooltip>
          ))}
        </div>
        <div
          style={{
            width: "400%",
            maxWidth: "80px",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "5px",
            minHeight: "90px"
          }}
        >
          <Editor
            editorState={editorState}
            onChange={handleEditorChange}
            ref={editorRef}
          />
        </div>
      </Card>
    </div>
  );
};

export default EditorPage;
