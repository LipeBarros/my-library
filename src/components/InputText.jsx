import classes from "./InputText.module.css"

function InputText({ titulo, nome, tipo }) {
  return (
    <div>
      <label className={classes.label}>{titulo}</label>
      <input className={classes.inputText} type={tipo === "password" ? "password" : "text"} name={nome} />
    </div>
  )
}

export { InputText }

