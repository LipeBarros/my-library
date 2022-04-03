import { Botao } from "../components/Botao"
import { Box } from "../components/Box"
import { Campos } from "../components/Campos"
import { InputText } from "../components/InputText"
import { Titulo } from "../components/Titulo"
import { AutentificacaoTemplate } from "../templates/AutentificacaoTemplate"
import classes from "./cadastro.module.css"

function Cadastro() {
  return (
    <>
      <AutentificacaoTemplate>
        <div className={classes.ilustracao}>
          <img src="./ilustracao_cadastro.jpg" alt="" />
        </div>
        <div className={classes.cadastro}>
          <Box>
            <img src="./logo.jpg" alt="logo" />
            <Titulo nome="Cadastro de Usuário" />
            <Campos>
              <InputText nome="nomeCompleto" titulo="Nome Completo" />
              <InputText nome="email" titulo="E-mail" />
              <InputText nome="senha" titulo="Senha" />
              <InputText nome="confirmaSenha" titulo="Confirmar Senha" />
              <div>
                <div className={classes.botoes}>
                  <Botao name="Cadastrar" />
                  <Botao name="Já possuo cadastro" link="/" />
                </div>
              </div>
            </Campos>
          </Box>
        </div>
      </AutentificacaoTemplate>
    </>
  )
}

export { Cadastro }