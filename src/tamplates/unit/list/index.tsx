import { useEffect } from "react"
import * as Styled from "./styles";
import { Base} from "../../base";
import { UnityList } from "../../../common/pages/unity/list"

export const UnityListTp = ()=>{
    useEffect(()=>{
        document.title = 'IOT - Lista de Funcionabilidades'
    },[])

    return(
        <Base>
        <Styled.Wrapper>
            <UnityList />
        </Styled.Wrapper>
        </Base>
    )
}