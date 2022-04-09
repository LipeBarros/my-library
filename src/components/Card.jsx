import { Link } from "react-router-dom"
import classes from "./Card.module.css"

function Card({ titulo, autor, imagem }) {
  return (
    <div className={classes.card}>
      <Link to="/livro" className={classes.capa} >
        <img src={imagem} alt="capa" />
      </Link>
      <div className={classes.frases}>
        <h3>{titulo}</h3>
        <h4>{autor}</h4>
      </div>
    </div>
  )
}

export { Card }