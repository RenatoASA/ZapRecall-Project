

import styled from "styled-components"
import Topo from './Topo'
import Content from './Content.jsx'
import Bottom from './Bottom'

export default function Container(){
    return(
    <StyleContainer>
        <Topo />
        <Content />
        {/* <Bottom /> */}
       
    </StyleContainer>
    )
}

const StyleContainer = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`