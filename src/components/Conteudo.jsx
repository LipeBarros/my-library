import classes from "./Conteudo.module.css"

function Conteudo({ children }) {
  return (
    <>
      <div className={classes.conteudo}>
        <div className={classes.container}>
          {children}
        </div>
      </div>
    </>
  )
}

export { Conteudo }