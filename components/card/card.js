import "./styles.scss";

const Card = ({ children, type, className = ""}) => {

  const classNames = !type? `card-primary ${className}`: type === "secondary"? `card-secondary ${className}`: `card-primary ${className}`
  return <div className={classNames}>
    { children }
  </div>
}

export default Card;