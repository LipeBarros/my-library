import { Botao } from "../components/Botao"
import { Box } from "../components/Box"
import { Campos } from "../components/Campos"
import { InputText } from "../components/InputText"
import { Titulo } from "../components/Titulo"
import classes from "./login.module.css"

function Login() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.ilustracao}>
            <img src="./ilustracao_login.jpg" alt="ilustracao" />
          </div>
          <div className={classes.formulario}>
            <form action="http://localhost:3000/users" method="POST" className={classes.form}>
              <Box>
                <img src="./logo.jpg" alt="logo" className={classes.img} />
                <Titulo nome="Login de Usuário" />
                <Campos>
                  <InputText titulo="E-mail" nome="e-mail" />
                  <InputText titulo="Senha" nome="senha" tipo="password" />
                  <div>
                    <div className={classes.botoes}>
                      <Botao name="Entrar" />
                      <Botao name="Criar Conta" link="/cadastro" />
                    </div>
                  </div>
                </Campos>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export { Login }