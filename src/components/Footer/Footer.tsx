import Logo from "../logo/Logo";
import "./footerStyles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo color="#ffffff" />
        </div>
        <div className="footer__divider" />
        <div className="footer__bottom">
          <p className="footer__bottom-text">&copy; 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
