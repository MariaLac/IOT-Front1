import { useRouter } from "next/router";
import { DropMenu } from "../dropmenu";
import * as Styled from "./styles";

export const Menu = () => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <div>IOT</div>
      <Styled.Right>
        <Styled.DropDown>
      <DropMenu title={"Broker- Menu"}>
                <a href="#">Cadastrar</a>
                <a href="#">Listar</a>
                <a href="#">Detalhar</a>
                <a href="#">Editar</a>
                <a href="#">Remover</a>
                <a href="#">Testar</a>
      </DropMenu>
      </Styled.DropDown>
      <a href="#">Sair</a>
      </Styled.Right>
    </Styled.Wrapper>
  );
};