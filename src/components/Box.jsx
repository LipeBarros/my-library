import classes from "./Box.module.css"

function Box({ children }) {
  return (
    <div className={classes.box}>
      {children}
    </div>
  )
}

export { Box }