import seta from '../assets/seta_play.png'
import styled from 'styled-components'
import { useState } from "react";



export default function Question(props) {

    let [icon, setIcon] = useState(seta);
    

    return (
        <StyleQuestion>
            <span>{props.text}</span>
            <img src={icon} onClick={next}></img>
        </StyleQuestion>
    )
}
// function next(){

// }

const StyleQuestion = styled.div`
      width: 290px;
    height: 80px;
    background-color: yellow;
    margin-bottom: 20px; 
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    
`