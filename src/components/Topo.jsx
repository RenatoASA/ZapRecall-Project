import logo from '../assets/logo.png'
import styled from 'styled-components'

export default function Topo(){
    return(
        <TopoStyle>
          <img src={logo}></img>
          <span>ZapRecall</span>
        </TopoStyle>
    )
}

const TopoStyle = styled.div`
     width: 375px;
    height: 110px;
    background-color: #FB6B6B;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
    width: 40px;
    margin-right: 20px;
    }
    span{
    font-size: 33px;
}
`