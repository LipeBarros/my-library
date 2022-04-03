import classes from "./autentificacaoTemplate.module.css"

function AutentificacaoTemplate({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

export { AutentificacaoTemplate }