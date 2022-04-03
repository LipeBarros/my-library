import { Link } from "react-router-dom"
import classes from "./Botao.module.css"

function Botao({ name, link }) {

  if (link) {
    return (
      <Link to={link}>
        <button className={classes.botao}>{name}</button>
      </Link>
    )
  } else {
    return (
      <button className={classes.botao}>{name}</button>
    )
  }
}

export { Botao }