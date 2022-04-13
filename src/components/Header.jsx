import { Link } from "react-router-dom"
import classes from "./Header.module.css"

function Header() {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.container} >
          <div>
            <Link to="/">
              <img className={classes.logo} src="./logo_header.png" alt="logo" />
            </Link>
          </div>
          <ul className={classes.navLink}>
            <li>
              <Link to="/conta">Minha Conta</Link>
            </li>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export { Header }