export default function Story(){
  
  const stories = [
    {
        nome: "9gag",
        imagem: "assets/img/9gag.svg"
    },
    {
        nome: "meowed",
        imagem: "assets/img/meowed.svg"
    },
    {
        nome: "barked",
        imagem: "assets/img/barked.svg"
    },
    {
        nome: "nathanwpylestrangeplanet",
        imagem:  "assets/img/nathanwpylestrangeplanet.svg"
    },
    {
        nome: "wawawicomics",
        imagem: "assets/img/wawawicomics.svg"
    },
    {
        nome: "respondeai",
        imagem: "assets/img/respondeai.svg"
    },
    {
        nome: "filomoderna",
        imagem: "assets/img/filomoderna.svg"
    },
    {
        nome: "memeriagourmet",
        imagem: "assets/img/memeriagourmet.svg"
    }
]

function Stories(props){
  const {nome, imagem} = props

  return (
    <div class="story">
      <div class="imagem">
        <img src={imagem} />
      </div>
      <div class="usuario">
        {nome}
      </div>
    </div>
  )
}

return (
  <div class="stories">
    {
      stories.map(story => <Stories imagem={story.imagem} nome={story.nome}/>)
    }
  <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
  </div>
  </div>
)
}

