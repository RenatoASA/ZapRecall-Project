import seta from '../assets/seta_play.png'
import virar from '../assets/seta_virar.png'
import erro from '../assets/icone_erro.png'
import certo from '../assets/icone_certo.png'
import quase from '../assets/icone_quase.png'
import Content from './Content'

import styled from 'styled-components'
import { useState } from "react";





export default function Question(props) {
    const [icon, setIcon] = useState(seta);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [finalColor, setFinalColor] = useState('');
    const [finalIcon, setFinalIcon] = useState(seta);
    const [disabled, setDisabled] = useState(false);


    function next() {
        if (icon === seta && !disabled) {
            setIcon(virar);
            setShowQuestion(true);

        } else if (icon === virar && !disabled) {
            setShowAnswer(true);
        }
    }

    function handleAnswer(color, icon) {
        setFinalColor(color);
        setFinalIcon(icon);
        setShowAnswer(false);
        setShowQuestion(false);
        setIcon(seta);
        setDisabled(true);
        props.setCount(props.count+1);
       console.log("prop.setCount" + props.count);
    }
    
    return (
        <StyleQuestion $finalColor={finalColor} $showAnswer={showAnswer}>
        {showAnswer ? (
            <>
                <span>{props.answer}</span>
                <ButtonGroup>
                    <ActionButton color="#FF3030" onClick={() => handleAnswer("#FF3030", erro)}>Não lembrei</ActionButton>
                    <ActionButton color="#FF922E" onClick={() => handleAnswer("#FF922E", quase)}>Quase lembrei</ActionButton>
                    <ActionButton color="#2FBE34" onClick={() => handleAnswer("#2FBE34", certo)}>Zap</ActionButton>                    
                
                </ButtonGroup>
            </>
        ) 
            : (
                <>
                    {disabled ? (
                        <RiskyText color={finalColor}>{props.text}</RiskyText>
                    ) : (
                        <span>{showQuestion ? props.question : props.text}</span>
                    )}
                    <img src={disabled ? finalIcon : icon} onClick={next} alt="icon" />
                </>
            )}
            
    </StyleQuestion>
    );
}


const StyleQuestion = styled.div`
      width: 290px;
      height: ${props => (props.$showAnswer ? 'auto' : '80px')};
    background-color: #ffffff;
    margin-bottom: 20px; 
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    flex-direction: ${props => (props.$showAnswer ? 'column' : 'row')};
    box-sizing: border-box;
    color: ${props => props.$finalColor || 'black'};
    
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ActionButton = styled.button`
    width: 60px;
    height: 30px;
    background-color: ${props => props.color};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const RiskyText = styled.span`
    text-decoration: line-through;
    color: ${props => props.color};
`;