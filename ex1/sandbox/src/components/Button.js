function Button(props){
  return(
    <button
      className={"btn " + props.className }
      type="button"
    >
      {props.name}
    </button>
  )
}

export default Button;