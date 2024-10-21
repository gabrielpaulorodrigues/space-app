import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao / index"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px; 

`

const BarraLateral = () =>{
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/icones/home.png"
                        iconeInativo="icones/home-inativo.png"
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral