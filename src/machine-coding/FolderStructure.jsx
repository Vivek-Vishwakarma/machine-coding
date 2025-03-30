import React, { useState } from "react";

const FolderStructure = () => {
  return (
    <div>
      <FolderStr folderData={data} />
    </div>
  );
};

const FolderStr = ({ folderData }) => {
  const [expand, setExpand] = useState({});
  const addFile = (name) => {
    console.log(name);
  };
  return (
    <>
      {folderData.map((data) => {
        return (
          <div key={data.name} className="folder-container">
            <div className="folder">
              <span
                onClick={() =>
                  setExpand((prevState) => ({
                    ...prevState,
                    [data.name]: !prevState[data.name],
                  }))
                }
              >
                {data.children && data.children.length
                  ? expand[data.name]
                    ? "-"
                    : "+"
                  : ""}
              </span>
              {data.name}
              {data.children && (
                <span onClick={() => addFile(data.name)}>+</span>
              )}
            </div>
            {expand[data.name] && data.children && data.children.length > 0 && (
              <FolderStr folderData={data.children} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default FolderStructure;

const data = [
  {
    name: "Angular",
    children: [
      {
        name: "assets",
      },
      {
        name: "projects",
        children: [
          {
            name: "login",
          },
          {
            name: "dashboard",
            children: [{ name: "charts" }, { name: "tables" }],
          },
        ],
      },
      {
        name: "src",
        children: [
          {
            name: "app",
            children: [
              { name: "components" },
              { name: "services" },
              { name: "models" },
            ],
          },
          {
            name: "environments",
            children: [
              { name: "environment.ts" },
              { name: "environment.prod.ts" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "React",
    children: [
      {
        name: "public",
        children: [{ name: "index.html" }, { name: "favicon.ico" }],
      },
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [{ name: "Header.js" }, { name: "Footer.js" }],
          },
          {
            name: "hooks",
            children: [{ name: "useAuth.js" }, { name: "useFetch.js" }],
          },
        ],
      },
    ],
  },
  {
    name: "Vue",
    children: [
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [{ name: "Navbar.vue" }, { name: "Sidebar.vue" }],
          },
          {
            name: "store",
            children: [{ name: "index.js" }, { name: "auth.js" }],
          },
        ],
      },
    ],
  },
];
