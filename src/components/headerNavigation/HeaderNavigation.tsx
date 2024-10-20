import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "../../shared/icons/ArrowBackIcon";
import "./headerNavigationStyles.scss";

export const HeaderNavigation = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    }

  return (
    <section className="header-navigation">
      <div className="header-navigation-container">
        <button onClick={handleClick} className="back-button">
          <div className="back-icon-container">
            <ArrowBackIcon width={10} height={10} color="#4F4FFF" />
          </div>
          <p className="back-text">Volver</p>
        </button>
      </div>
    </section>
  );
};
