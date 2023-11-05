import "./Navbar.scss";
// import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>AR SHAKIR</h1>
      </div>

      <div className="nav-links">
        <ul className="nav-links-container">
          <li>Product</li>
          <li>Template</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="user-actions">
        <button className="sign-in-btn">Sign In</button>
        <button className="start-free-btn">Start Free</button>
      </div>
    </div>
  );
};

export default Navbar;
