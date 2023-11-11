import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Link to="/">User List</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/log-in">Log In</Link>
    </div>
  );
};
