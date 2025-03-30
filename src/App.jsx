import { lazy, Suspense } from "react";
import "./App.css";
import { Navbar } from "./navigation/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DropdownDebounce from "./machine-coding/DropdownDebounce";
import Pagination from "./machine-coding/Pagination";
import CustomHook from "./machine-coding/CustomHook";
import FlatteningObj from "./machine-coding/FlatteningObj";
import ProgressBar from "./machine-coding/ProgressBar";
import FolderStructure from "./machine-coding/FolderStructure";
import Otp from "./machine-coding/Otp";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Projects = lazy(() => import("./pages/Projects"));
  const childRoutes = [
    { path: "debounce", element: <DropdownDebounce /> },
    { path: "pagination", element: <Pagination /> },
    { path: "customhook", element: <CustomHook /> },
    { path: "flatobj", element: <FlatteningObj /> },
    { path: "progressbar", element: <ProgressBar /> },
    { path: "folderstructure", element: <FolderStructure /> },
    { path: "otp", element: <Otp /> },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<>Loading ...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            exact
            element={
              <Suspense fallback={<>Loading ...</>}>
                <Projects />
              </Suspense>
            }
          >
            {childRoutes.map((e) => (
              <Route key={e.path} path={e.path} element={e.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
