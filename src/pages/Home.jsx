import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p>
        Go to{" "}
        <u>
          <NavLink to="/projects">Machine Coding Page</NavLink>
        </u>
      </p>
    </div>
  );
};

export default Home;
