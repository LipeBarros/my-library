import classes from "./Footer.module.css"

function Footer() {
  return (
    <>
      <div className={classes.rodape}>
        <div className={classes.container}>
          Criado com ❤️ por Felipe Barros
        </div>
      </div>
    </>
  )
}

export { Footer }