import React from "react";
function EstruturaPosts(props) {
  console.log(props);

  const [curtirPost, setIconeCurtir] = React.useState("heart-outline");
  const [salvarPost, setIconeSalvar] = React.useState("bookmark-outline");
  const [corCoracao, setCorCoracao] = React.useState('');
  const [addCutiu, setNumeroCurtida] = React.useState(props.numeroCurtidas);
   

  function alterarIconeSalvar() {
    const iconeSalvouPost = "bookmark";
    const iconeDesmarcarPost = "bookmark-outline";
    if (salvarPost === "bookmark") {
      setIconeSalvar(iconeDesmarcarPost);
    } else {
      setIconeSalvar(iconeSalvouPost);
    }
  }

  function alterarIconeCurtir() {
    const iconeCutirPost = "heart";
    const iconeDescurtirPost = "heart-outline";
    const coracaoVermelho = "red";
    const coracaoVazio= "";
    const somaCurtiu = addCutiu+1
    const subtrairCutriu = addCutiu-1;
    if (curtirPost === "heart") {
      setIconeCurtir(iconeDescurtirPost);
      setCorCoracao(coracaoVazio);
      setNumeroCurtida(subtrairCutriu);

    } else {
      setIconeCurtir(iconeCutirPost);
      setCorCoracao(coracaoVermelho)
      setNumeroCurtida(somaCurtiu);
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemTopo} alt="usuario" />
          {props.textoTopo}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onDoubleClick={alterarIconeCurtir} src={props.imagemConteudo} alt="usuario" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={alterarIconeCurtir} name={curtirPost}style={{color:corCoracao}}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={alterarIconeSalvar} name={salvarPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtida} alt="curtidas" />
          <div class="texto">
            Curtido por <strong>{props.usurioCurtiu}</strong> e
            <strong>outras {addCutiu} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const postsObj = [
    {
      imagemTopo: "img/meowed.svg",
      textoTopo: "meowed",
      imagemConteudo: "img/gato-telefone.svg",
      imagemCurtida: "img/respondeai.svg",
      usurioCurtiu: "respondeai",
      numeroCurtidas: 101523,
    },
    {
      imagemTopo: "img/barked.svg",
      textoTopo: "barked",
      imagemConteudo: "img/dog.svg",
      imagemCurtida: "img/adorabdle_animals.svg",
      usurioCurtiu: "adorable_animals",
      numeroCurtidas: 99159,
    },
  ];
  return (
    <div class="posts">
      {postsObj.map((p) => (
        <EstruturaPosts
          imagemTopo={p.imagemTopo}
          textoTopo={p.textoTopo}
          imagemConteudo={p.imagemConteudo}
          imagemCurtida={p.imagemCurtida}
          usurioCurtiu={p.usurioCurtiu}
          numeroCurtidas={p.numeroCurtidas}
        />
      ))}
    </div>
  );

  /*  return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="img/meowed.svg" alt = "usuario"/>
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="img/gato-telefone.svg" alt = "usuario"/>
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
                        <img src="img/respondeai.svg" alt = "curtidas"/>
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="img/barked.svg" alt = "usuario"/>
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="img/dog.svg" alt = "logo"/>
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
                        <img src="img/adorabdle_animals.svg" alt = "curtidas"/>
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ); */
}
