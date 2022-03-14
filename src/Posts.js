import Story from "./Story"
import Sidebar from "./Sidebar"

export default function Posts() {
const posts = [
    {
        nome: "meowed",
        perfil: "assets/img/meowed.svg",
        imagem: "assets/img/gato-telefone.svg",
        likeImagem: "assets/img/respondeai.svg",
        likePerfil: "respondeai"
    },
    {
        nome: "barked",
        perfil: "assets/img/barked.svg",
        imagem: "assets/img/dog.svg",
        likeImagem: "assets/img/adorable_animals.svg",
        likePerfil: "adorable_animals"
    }
]

return (
    <div class="corpo">
        <div class="esquerda">  
            <Story />
            {
                posts.map(post => <Post nome={post.nome} imagemPerfil={post.perfil} imagemPost={post.imagem} likeImagem={post.likeImagem} likePerfil={post.likePerfil} />)
            }
        </div>
        <Sidebar />
    </div>
)
}

function Post(props) {
    const {nome, imagemPerfil, imagemPost, likeImagem, likePerfil} = props;

return (
    <div class="posts">
        <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={imagemPerfil} />
            {nome}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div class="conteudo">
            <img src={imagemPost} />
        </div>
        <div class="fundo">
            <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div class="curtidas">
            <img src={likeImagem} />
            <div class="texto">
                Curtido por <strong>{likePerfil}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
            </div>
        </div>
        </div>
    </div>
)
}