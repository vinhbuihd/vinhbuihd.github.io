const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt="kem" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">${props.price}</p>
      </div>
    </div>
  );
};

export default Card;
