import "./styles.scss";

const Input = ({ type, placeholder, options, required, onChange, value }) => {

  if(type.toLowerCase() === "select") {

    return <select className="select" required={required} onChange={onChange} value={value}>
      <option disabled>Select gender</option>
      {
        options.map((option, index) => <option key={index}>{option}</option>)
      }
    </select>
  }

  return <input className="input" placeholder={placeholder} type={type}  required={required} onChange={onChange} value={value}/>
}

export default Input;