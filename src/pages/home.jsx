
import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Genero } from "../components/Genero"
import { Header } from "../components/Header"
import classes from "./home.module.css"

function Home() {
  return (
    <>
      <Header />
      <Conteudo>
        <div className={classes.lista}>
          <Genero titulo="Romance" />
          <Genero titulo="Aventura" />
          <Genero titulo="Bibliografia" />
        </div>

      </Conteudo>
      <Footer />
    </>
  )
}

export { Home }