import React from "react"



function EstruturaUsuario (props){

    const [nomeUsuario, setNomeUsuario] = React.useState(props.subTit); 
    const [fotoUsuario, setFotoUsuario] = React.useState(props.im);
    
    function alterarFoto(){
        const fotoPrompt = prompt ("Insira novo URL da imagem!");
        setFotoUsuario(fotoPrompt);
    }

    function alterarNome(){
        const nomePrompt = prompt ("Insira o novo nome de usuário!");
        setNomeUsuario(nomePrompt);
    }
    return (
        <>
            <img onClick={alterarFoto} src={fotoUsuario} alt = "usuario"/>
            <div class="texto">
                <strong>{props.tit}</strong>
                <span>
                    {nomeUsuario}
                    
                    <ion-icon onClick={alterarNome} name="pencil"></ion-icon>
                </span>
                
            </div>
        </>
    );
}

export default function Usuario() {
    
    const usuarioObg = [{ imagem:"img/catanacomics.svg",titulo:"catanacomics",subTitulo:"Catana"}];
    
    
    return (
        
        <div class="usuario">
            {usuarioObg.map((u)=>(
                <EstruturaUsuario im={u.imagem} tit={u.titulo} subTit={u.subTitulo}/>
            ))}
        
        
        </div>
    );
}