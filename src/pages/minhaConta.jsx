import { Link } from "react-router-dom"
import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import classes from "./minhaConta.module.css"

function MinhaConta() {
  return (
    <>
      <Header />
      <Conteudo>
        <div className={classes.minhaConta}>
          <h1>Minha Conta</h1>
          <h2>Estes são os livros da sua cabeceira</h2>
          <table className={classes.tabela}>
            <tr>
              <th>Título</th>
              <th width={150}>Autor</th>
              <th width={100}>Data do emprestimo</th>
              <th width={100}>Data de previsão de devolução</th>
              <th width={100}>Data da devolução</th>
              <th width={100}>Status</th>
            </tr>
            <tr>
              <td><Link to="#">Alice no país das maravilhas</Link></td>
              <td>Louis Karol</td>
              <td>02/04/2022</td>
              <td>02/06/2022</td>
              <td>15/05/2022</td>
              <td><Link className={classes.status} to="#">Devolver</Link></td>
            </tr>
            <tr>
              <td><Link to="#">Alice no país das maravilhas</Link></td>
              <td>Louis Karol</td>
              <td>02/04/2022</td>
              <td>02/06/2022</td>
              <td>15/05/2022</td>
              <td>Devolvido</td>
            </tr>
            <tr>
              <td><Link to="#">Alice no país das maravilhas</Link></td>
              <td>Louis Karol</td>
              <td>02/04/2022</td>
              <td>02/06/2022</td>
              <td>15/05/2022</td>
              <td>Devolvido</td>
            </tr>
            <tr>
              <td><Link to="#">Alice no país das maravilhas</Link></td>
              <td>Louis Karol</td>
              <td>02/04/2022</td>
              <td>02/06/2022</td>
              <td>15/05/2022</td>
              <td>Devolvido</td>
            </tr>
          </table>
        </div>
      </Conteudo>
      <Footer />
    </>
  )
}

export { MinhaConta }