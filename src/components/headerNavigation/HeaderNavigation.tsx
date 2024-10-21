import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "../../shared/icons/ArrowBackIcon";
import "./headerNavigationStyles.scss";
import { RoutesPath } from "../../modules/constants/routes";

interface HeaderNavigationProps {
  toNavigate?: RoutesPath;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.toNavigate && navigate(props.toNavigate || RoutesPath.HOME);
  };

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
