import { Botao } from "../components/Botao"
import "./login.css"



function Login() {




  return (
    <>
      <div className="container">
        <div className="content">
          <div className="ilustracao">
            <img src="./ilustracao_login.jpg" alt="ilustracao" />
          </div>
          <div className="formulario">
            <form action="http://localhost:3000/users" method="POST">
              <div className="box">
                <img src="./logo.jpg" alt="logo" />
                <h1>Login de Usuário</h1>
                <div className="campos">
                  <div>
                    <label>E-mail</label>
                    <input type="text" name="email" />
                  </div>
                  <div>
                    <label>Senha</label>
                    <input type="password" name="senha" />
                  </div>
                  <div>
                    <div className="botoes">
                      <Botao name="Entrar" />
                      <Botao name="Criar Conta" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}


export { Login }