function EstruturaSujestao(props) {
  return (
    <div>
      <div class="sugestao">
        <div class="usuario">
          <img src={props.imagemUsuario} alt="usuario" />
          <div class="texto">
            <div class="nome">{props.textoNome}</div>
            <div class="razao">{props.textoRazao}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );
}

export default function Sugestoes() {
  const sugestaoObjt = [
    {
      imagemUsuario: "img/bad.vibes.memes.svg",
      textoNome: "bad.vibes.memes",
      textoRazao: "Segue você",
    },
    {
      imagemUsuario: "img/chibirdart.svg",
      textoNome: "chibirdart",
      textoRazao: "Segue você",
    },
    {
      imagemUsuario: "img/razoesparaacreditar.svg",
      textoNome: "razoesparaacreditar",
      textoRazao: "Novo no Instagram",
    },
    {
      imagemUsuario: "img/adorable_animals.svg",
      textoNome: "adorable_animals",
      textoRazao: "Segue você",
    },
    {
      imagemUsuario: "img/smallcutecats.svg",
      textoNome: "smallcutecats",
      textoRazao: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestaoObjt.map((s) => (
        <EstruturaSujestao
          imagemUsuario={s.imagemUsuario}
          textoNome={s.textoNome}
          textoRazao={s.textoRazao}
        />
      ))}
    </div>
  );
}
