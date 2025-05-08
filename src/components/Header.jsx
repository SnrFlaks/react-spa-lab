import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="section">
      <nav>
        <Link to="/about">Про мене</Link> |<Link to="/my-city">Моє місто</Link> |
        <Link to="/my-future">Мій розвиток</Link>
      </nav>
    </header>
  );
}
