import { Link } from "react-router-dom"
import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import classes from "./admin.module.css"

function Admin() {

  function exclui() {
    alert("Excluido com sucesso")
  }


  return (
    <>
      <Header />
      <Conteudo>
        <div className={classes.admin}>
          <h1>Area de administração</h1>
          <button>
            <img src="/adicionar-botao.png" alt="adicionar" />
            Adicionar Livro
          </button>
          <table className={classes.tabela}>
            <tr>
              <th>Título</th>
              <th width={150}>Autor</th>
              <th width={100}>Gênero</th>
              <th width={100}>Status</th>
              <th width={100}>Ação</th>
            </tr>
            <tr>
              <td>
                <Link to="/livro" >
                  As Brumas de Avalon
                </Link>
              </td>
              <td>lois</td>
              <td>romance</td>
              <td>disponivel</td>
              <td className={classes.acao}>
                <Link to="#">
                  <img src="/papel.png" alt="editar" />
                </Link>
                <a href="#" onClick={exclui}>
                  <img src="/excluir.png" alt="excluir" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/livro" >
                  As Brumas de Avalon
                </Link>
              </td>
              <td>lois</td>
              <td>romance</td>
              <td className={classes.emprestado}>emprestado</td>
              <td className={classes.acao}>
                <Link to="#">
                  <img src="/papel.png" alt="editar" />
                </Link>
                <a href="#" onClick={exclui}>
                  <img src="/excluir.png" alt="excluir" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/livro" >
                  As Brumas de Avalon
                </Link>
              </td>
              <td>lois</td>
              <td>romance</td>
              <td>disponivel</td>
              <td className={classes.acao}>
                <Link to="#">
                  <img src="/papel.png" alt="editar" />
                </Link>
                <a href="#" onClick={exclui}>
                  <img src="/excluir.png" alt="excluir" />
                </a>
              </td>
            </tr>


          </table>
        </div>
      </Conteudo>
      <Footer />
    </>

  )
}

export { Admin }