import classes from "./Titulo.module.css"

function Titulo({ nome }) {
  return (
    <h1 className={classes.titulo}>{nome}</h1>
  )
}

export { Titulo }