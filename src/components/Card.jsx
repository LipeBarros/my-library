import classes from "./Card.module.css"

function Card({ titulo, autor, imagem }) {
  return (
    <div className={classes.card}>
      <img className={classes.capa} src={imagem} alt="capa" />
      <h3>{titulo}</h3>
      <h4>{autor}</h4>
    </div>
  )
}

export { Card }