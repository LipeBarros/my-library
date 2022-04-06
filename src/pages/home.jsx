
import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Genero } from "../components/Genero"
import { Header } from "../components/Header"

function Home() {
  return (
    <>
      <Header />
      <Conteudo>
        <Genero>
        </Genero>
        <Genero>
        </Genero>
      </Conteudo>
      <Footer />
    </>
  )
}

export { Home }