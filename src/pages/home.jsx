import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import classes from "./home.module.css"

function Home() {
  return (
    <>
      <Header />
      <Conteudo>
        Dentro do conteudo
      </Conteudo>
      <Footer />
    </>
  )
}

export { Home }