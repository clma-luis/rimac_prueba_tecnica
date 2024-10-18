import Logo from "../logo/Logo";
import './headerStyles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__contact">
          <span className="header__contact-text">Compra por este medio:</span>
          <a href="tel:+51014116001" className="header__contact-phone">(01) 411 6001</a>
        </div>
      </div>
    </header>
  );
};

export default Header;