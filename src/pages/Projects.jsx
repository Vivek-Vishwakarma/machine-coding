import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    { name: "/projects/debounce" },
    { name: "/projects/pagination" },
    { name: "/projects/customhook" },
    { name: "/projects/flatobj" },
    { name: "/projects/progressbar" },
    { name: "/projects/folderstructure" },
    { name: "/projects/otp" },
  ];
  useEffect(() => {
    if (location.pathname.split("/").length == 2) {
      navigate(routes[0].name);
    }
  }, []);

  return (
    <>
      <div className="project-route">
        {routes.map((e) => (
          <NavLink
            key={e.name}
            to={e.name}
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            {e.name.split("/")[2]}
          </NavLink>
        ))}
      </div>
      <hr />
      <div className="project-container">
        <Outlet />
      </div>
    </>
  );
};
export default Projects;
