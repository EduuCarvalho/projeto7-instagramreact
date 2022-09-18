
function Story(props) {
  
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} alt="story" />
      </div>
      <div class="usuario">{props.texto}</div>
    </div>
  );
}

export default function Stories() {
  const story = [
    { imagem: "img/9gag.svg", texto: "9gag" },
    { imagem: "img/meowed.svg", texto: "meowed" },
    { imagem: "img/barked.svg", texto: "barked" },
    { imagem: "img/nathanwpylestrangeplanet.svg", texto: "nathanwpylestrangeplanet" },
    { imagem: "img/wawawicomics.svg", texto: "wawawicomics" },
    { imagem: "img/respondeai.svg", texto: "respondeai" },
    { imagem: "img/filomoderna.svg", texto: "filomoderna" },
    { imagem: "img/memeriagourmet.svg", texto: "memeriagourmet" },
  ];
  return (
    <div class="stories">
      {story.map((s) => (
        <Story imagem={s.imagem} texto={s.texto} />
      ))}
      ;
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
