import scrollToTheTop from "../../helpers/ScrollToTheTop";
import "./Header.css";

export default function Header() {
  return (
    <span onClick={scrollToTheTop} className="header">
      MOVIES
    </span>
  );
}
