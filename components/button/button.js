import "./styles.scss";

const Button = ({ name, type, isLoading, onClick, disabled}) => {

  let className = isLoading === true? `button ${type} loading`: `button ${type}`
  className = disabled ? `${className} disabled`: className

  return <button className={className} disabled onClick={onClick? ()=> onClick(): ""}>{name}</button>
}

export default Button;