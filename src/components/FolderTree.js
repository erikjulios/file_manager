import React, { useState, useEffect } from "react";
import axios from "axios";
import folderIcon from "../assets/folder-icon.png";
import "../App.css"; // Tambahkan ini untuk impor CSS
const FolderTree = ({ onSelectFolder }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  useEffect(() => {
    loadFolders();
  }, []);

  const loadFolders = (parentId = null) => {
    // const url = parentId ? `/api/folders/${parentId}` : `/api/folders`;
    const url = parentId
      ? `http://localhost:8080/api/folders/${parentId}`
      : `http://localhost:8080/api/folders`;

    axios.get(url).then((response) => {
      setFolders(response.data);
    });
    axios
      .get(url)
      .then((response) => {
        setFolders(response.data);
      })
      .catch((error) => {
        console.error(
          "Error loading folders:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder.id);
    onSelectFolder(folder.id);
  };

  return (
    <div className="folder-tree">
      <ul
        style={{
          display: "flex",
          flexDirection: "column", // Ubah dari "row" menjadi "column" agar folder tampil vertikal
          listStyleType: "none",
          padding: 0,
        }}
      >
        {folders.map((folder) => (
          <li
            key={folder.id}
            onClick={() => handleFolderClick(folder)}
            style={{ margin: "0 10px", cursor: "pointer" }}
          >
            <img
              src={folderIcon}
              alt="Folder Icon"
              style={{ width: "24px", height: "24px", marginRight: "5px" }}
            />
            {folder.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderTree;
