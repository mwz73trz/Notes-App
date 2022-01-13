import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/another-page">Another Page</Link>
      <Link to="/and-another-page">And Another Page</Link>
    </div>
  );
}

export default NavBar;
