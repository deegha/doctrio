import "./styles.scss";

const Button = ({ name, type, isLoading, onClick, disabled}) => {

  let className = isLoading === true? `button ${type} loading`: `button ${type}`
  className = disabled ? `${className} disabled`: className
  if(disabled){
    return <button className={className} disabled onClick={onClick? ()=> onClick(): ""}>{name}</button>
  } else {
    return   <button className={className} onClick={onClick? ()=> onClick(): ""}>
      <span className= "button-text"> {name} </span>
    </button>
  }

}

export default Button;