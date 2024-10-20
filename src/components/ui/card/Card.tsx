import './cardStyles.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card__icon">
        {/* <Shield size={24} color="#FF0000" /> */}
      </div>
      <div className="card__content">
        <h2 className="card__title">Para mí</h2>
        <p className="card__description">
          Cotiza tu seguro de salud y agrega familiares si así lo deseas.
        </p>
      </div>
      {/* <div className="card__circle"></div> */}
    </div>
  );
};

export default Card;