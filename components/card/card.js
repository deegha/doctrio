import "./styles.scss";

const Card = ({ children, type }) => {

  const className = !type? "card-primary": type === "secondary"? "card-secondary": "card-primary"
  return <div className={className}>
    { children }
  </div>
}

export default Card;