import "./style.css";

type cardProps = {
  picture: string;
  text: string;
};

export const Card = ({ picture, text }: cardProps) => {
  return (
    <div className="card-content">
      <img className="card-content-img" src={picture} alt="" />
      <span className="card-content-text">{text}</span>
    </div>
  );
};
