import React, { useState } from "react";
import FolderTree from "./components/FolderTree";
import axios from "axios";
import folderIcon from "./assets/folder-icon.png"; // Ikon folder
import fileIcon from "./assets/file-icon.png"; // Ikon file
import "./App.css"; // Impor CSS

const App = () => {
  const [subFolders, setSubFolders] = useState([]);

  const handleFolderSelect = (folderId) => {
    axios
      .get(`http://localhost:8080/api/folders/${folderId}`)
      .then((response) => {
        setSubFolders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching folders:", error);
      });
  };

  return (
    <div className="app">
      <div className="panel left">
        <FolderTree onSelectFolder={handleFolderSelect} />
      </div>
      <div className="panel right">
        {subFolders.length > 0 ? (
          <ul>
            {subFolders.map((item) => (
              <li
                key={item.id}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={item.type === "0" ? folderIcon : fileIcon}
                  alt={item.type === "0" ? "Folder Icon" : "File Icon"}
                  style={{ width: "24px", height: "24px", marginRight: "10px" }}
                />
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Select a folder to view its contents.</p>
        )}
      </div>
    </div>
  );
};

export default App;
