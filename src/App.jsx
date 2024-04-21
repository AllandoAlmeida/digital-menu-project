import { useState } from "react";
import hastaurante from "./assets/hashtaurante.webp";
import { Navegacao } from "./components/Navegacao";
import { ItemCardapio } from "./components/ItemCardapio";
import { bebidas, pratosPrincipais, sobremesas } from "./cardapio";

import "./App.css";



export const App = () => {
    const paginasMenu = [pratosPrincipais, bebidas, sobremesas];
    const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={hastaurante} alt="Imagem do um restaurante" className="capa" />
      <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            key={item.name}
            nome={item.nome}
            descricao={item.preco}
            preco={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
};
