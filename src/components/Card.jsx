import classes from "./Card.module.css"

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.capa}>
        <img src="./livro2.jpg" alt="capa" />
        <div className={classes.disponibilidade}>Disponível</div>
      </div>
      <h3>A Arte da Guerra</h3>
      <h4>John Green</h4>
    </div>
  )
}

export { Card }