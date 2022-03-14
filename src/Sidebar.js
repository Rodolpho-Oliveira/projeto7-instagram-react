export default function Sidebar() {
  const sugestoes = [
      {
          imagem: "assets/img/bad.vibes.memes.svg",
          perfil: "bad.vibes.memes",
          contato: "Segue você",
      },
      {
          imagem: "assets/img/chibirdart.svg",
          perfil: "chibirdart",
          contato: "Segue você",
      },
      {
          imagem: "assets/img/razoesparaacreditar.svg",
          perfil: "razoesparaacreditar",
          contato: "Novo no Instagram",
      },
      {
          imagem: "assets/img/adorable_animals.svg",
          perfil: "adorable_animals",
          contato: "Segue você",
      },
      {
          imagem: "assets/img/smallcutecats.svg",
          perfil: "smallcutecats",
          contato: "Segue você",
      },
  ]

  return(
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
        <strong>catanacomics</strong>
          Catana
        </div>
      </div>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {
          sugestoes.map(sugestao => <Sugestoes imagem={sugestao.imagem} perfil={sugestao.perfil} contato={sugestao.contato} />)
        }
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  )


}

function Sugestoes(props) {
  const {imagem, perfil, contato} = props;

  return (
    <div class="sugestao">
        <div class="usuario">
          <img src={imagem} />
          <div class="texto">
            <div class="nome">{perfil}</div>
            <div class="razao">{contato}</div>
          </div>
        </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}

