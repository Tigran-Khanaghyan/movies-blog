import scrollToTheTop from "../../helpers/ScrollToTheTop";
import { Link } from "react-router-dom";
import "./Header.css";

const linkStyle ={
  textDecoration: "none",
  color: "white"
}

export default function Header() {
  return (
    <div className="header">
      <div>
        <span onClick={scrollToTheTop}>MOVIES</span>
      </div>
      <div>
        <Link to="/login" style={linkStyle}>
          <span>Log in</span>
        </Link>
      </div>
    </div>
  );
}
