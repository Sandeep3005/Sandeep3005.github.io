import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

interface IHeader {
  homepage: string;
  title: string;
}

const Header = () => {
  const { homepage, title }: IHeader = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link" target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
