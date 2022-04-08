import { Card } from "../components/Card"
import { Conteudo } from "../components/Conteudo"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import classes from "./genero.module.css"

function Genero(children) {
  return (
    <>
      <Header />
      <Conteudo>
        <div className={classes.galeria}>
          <h1>Romance</h1>
          <div className={classes.livros}>
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro2.jpg" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./frankestein.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
            <Card titulo="A Culpa é das Estrelas" autor="John Green" imagem="./livro.webp" />
          </div>
        </div>
      </Conteudo>
      <Footer />
    </>
  )
}

export { Genero }