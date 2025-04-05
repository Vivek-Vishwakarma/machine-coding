import React, { useEffect, useRef, useState } from "react";

const NestedCheckbox = () => {
  return (
    <>
      <CheckBox checkData={data} />
    </>
  );
};

export default NestedCheckbox;

const CheckBox = ({ checkData }) => {
  const [nestedArr, setNestedArr] = useState([]);
  const checkHandler = (id, checked) => {
    findCheckElement(nestedArr, id, checked);
    setNestedArr([...nestedArr]);
  };

  const findCheckElement = (data, id, checked) => {
    data.forEach((element) => {
      if (element.id == id || id == null) {
        element.checked = !checked;
        if (element.checked && element.children) {
          findCheckElement(element.children, null, false);
        } else if (!element.checked && element.children) {
          findCheckElement(element.children, null, true);
        }
      } else {
        element.children && findCheckElement(element.children, id, checked);
      }
    });
  };
  useEffect(() => {
    setNestedArr(checkData);
  }, []);

  return (
    <>
      {nestedArr.map((e) => (
        <div key={e.id} className="folder-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              name={e.id}
              id={e.id}
              checked={e.checked}
              onChange={() => checkHandler(e.id, e.checked)}
            />
            <label htmlFor={e.id}>{e.name}</label>
          </div>
          {e.children && e.children.length > 0 ? (
            <CheckBox checkData={e.children} />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};

const data = [
  {
    name: "Angular",
    id: "cbdba915-1106-48b2-a6cd-73d793aacb08",
    checked: true,
    children: [
      {
        name: "assets",
        id: "70b128e5-6aaf-431e-8361-276b4ec115db",
        checked: false,
      },
      {
        name: "projects",
        id: "1387dfdd-3023-48e5-a362-77fcd87cd79b",
        checked: true,
        children: [
          {
            name: "login",
            id: "ff138a3f-42a5-4035-9ba7-22572ce5ea76",
            checked: false,
          },
          {
            name: "dashboard",
            id: "07c70f24-dfc5-4a8a-ae93-538ce287e182",
            checked: true,
            children: [
              {
                name: "charts",
                id: "623ee1ad-4395-4312-9c40-f5d4349576de",
                checked: false,
              },
              {
                name: "tables",
                id: "9ea47b34-1e80-4ae4-940c-d1671ea9ec64",
                checked: true,
              },
            ],
          },
        ],
      },
      {
        name: "src",
        id: "8f5a23a2-47a2-48f1-93d4-3f9fc5ede562",
        checked: false,
        children: [
          {
            name: "app",
            id: "d322c8bf-bcb4-4901-95ae-366a6bd2c370",
            checked: true,
            children: [
              {
                name: "components",
                id: "834bd463-85a2-4216-9063-ded57c33f388",
                checked: false,
              },
              {
                name: "services",
                id: "865b4c33-4dae-40a7-b8b6-a6e6385ed5b2",
                checked: true,
              },
              {
                name: "models",
                id: "298a8c9b-54bd-42b7-ad4a-2d2b127bf78c",
                checked: false,
              },
            ],
          },
          {
            name: "environments",
            id: "ba1598b3-459f-487b-9a3d-d3256b03e927",
            checked: true,
            children: [
              {
                name: "environment.ts",
                id: "a829c4a9-1f93-4317-84d8-e92effbc87e3",
                checked: false,
              },
              {
                name: "environment.prod.ts",
                id: "5107ca13-a82a-4604-98be-9600a4003ab2",
                checked: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "React",
    id: "59414b7b-beb8-42e3-b433-4f450ea80e0d",
    checked: false,
    children: [
      {
        name: "public",
        id: "f4d98baf-6455-4861-b966-25740e82a36d",
        checked: true,
        children: [
          {
            name: "index.html",
            id: "c18ca911-3c93-4533-a83e-80db67bc1b04",
            checked: false,
          },
          {
            name: "favicon.ico",
            id: "1a1f2418-72a2-4403-9e5b-5692c7adfda6",
            checked: true,
          },
        ],
      },
      {
        name: "src",
        id: "6e23c5b1-d6f3-4dd1-a7e2-c3c2230204ef",
        checked: false,
        children: [
          {
            name: "components",
            id: "8d0c784c-51e1-4e33-b188-79dd93f10e29",
            checked: true,
            children: [
              {
                name: "Header.js",
                id: "14a05a80-f3e0-4953-8f9c-8798a0df99cc",
                checked: false,
              },
              {
                name: "Footer.js",
                id: "29014208-e0c8-42b2-9f67-5bb889d7b42f",
                checked: true,
              },
            ],
          },
          {
            name: "hooks",
            id: "374e1db8-2068-4a7b-8466-7fce18953d74",
            checked: false,
            children: [
              {
                name: "useAuth.js",
                id: "912fe702-1b0f-41fd-8a4b-db80f6a2b862",
                checked: true,
              },
              {
                name: "useFetch.js",
                id: "896ffa60-11c0-42db-8d88-1790aed663ec",
                checked: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vue",
    id: "8601e2a6-b790-4965-b874-9df93dedc466",
    checked: true,
    children: [
      {
        name: "src",
        id: "f800a75e-eb7b-4250-aa31-ea0c619c6cac",
        checked: false,
        children: [
          {
            name: "components",
            id: "a42a0c1f-f7b8-4409-91d4-1bdf9743836f",
            checked: true,
            children: [
              {
                name: "Navbar.vue",
                id: "3e1948fb-e10f-475f-98c4-40d3bb57c1e8",
                checked: false,
              },
              {
                name: "Sidebar.vue",
                id: "eee0c97e-7743-4d5c-a455-53bc1b5e6a0d",
                checked: true,
              },
            ],
          },
          {
            name: "store",
            id: "58d4e2c0-fb0b-4cfc-ae3a-bba05c63417f",
            checked: false,
            children: [
              {
                name: "index.js",
                id: "29f41133-eb6d-42b0-bf8e-de379986cbaa",
                checked: true,
              },
              {
                name: "auth.js",
                id: "46432996-b1cf-4058-8a9d-06e59d702fd2",
                checked: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
