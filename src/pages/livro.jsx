import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import classes from "./livro.module.css"

function Livro() {
  return (
    <>
      <Header />
      <Conteudo>
        <div className={classes.principal}>
          <div className={classes.foto}>
            <img src="./frankestein.webp" alt="capa" />
          </div>
          <div className={classes.info}>
            <div>
              <h1>As Brumas de Avalon</h1>
              <h2>Autor: Mary Shelley</h2>
              <div className={classes.avaliacao}>
                <img src="./star.png" alt="star" />
                <img src="./star.png" alt="star" />
                <img src="./star.png" alt="star" />
                <img src="./star.png" alt="star" />
                <img src="./star.png" alt="star" />
              </div>
              <h3>Gênero: Romance</h3>
              <label>Data de devolução:</label>
              <input type="text" name="dataDevolucao" placeholder="dd/mm/aaaa" />
              <button>Pegar Emprestado</button>
            </div>

          </div>
          <div className={classes.sinopse}>
            RANKENSTEIN é muitas décadas anterior à obra de Poe, Bram Stoker ou H.G. Wells, e vem sendo publicado ininterruptamente desde 1818. Pouco menos de dois anos antes, a criatura nascia numa noite de tempestade à beira do lago Genebra.No verão de 1816, Mary e um grupo de escritores ingleses ― seu marido, Percy Shelly, o poeta Lord Byron e John William Polidori ― dividiam uma casa na villa Diodatti, na Suíça. Entusiasmados pela leitura de uma edição francesa de Fantasmagoriana ― coletânea de histórias sobre aparições, espectros, sonhos e fantasmas
          </div>
        </div>
      </Conteudo>
      <Footer />

    </>
  )
}

export { Livro }