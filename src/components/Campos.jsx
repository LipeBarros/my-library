import classes from "./Campos.module.css"

function Campos({ children }) {
  return (
    <div className={classes.campos}>
      {children}
    </div>
  )
}

export { Campos }