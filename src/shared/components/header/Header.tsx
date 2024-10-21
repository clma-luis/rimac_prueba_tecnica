import { useNavigate } from "react-router-dom";
import PhoneIcon from "../../icons/PhoneIcon";

import "./headerStyles.scss";
import Logo from "@/components/ui/logo/Logo";


const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" onClick={handleClick}>
          <Logo />
        </div>
        <div className="header__contact">
          <span className="header__contact-text">Compra por este medio:</span>

          <div className="header__contact-phone-container">
            <PhoneIcon />
            <a href="tel:+51014116001" className="header__contact-phone">
              (01) 411 6001
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
