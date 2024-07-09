
import Question from './Question'
import styled from 'styled-components'

export default function Content() {

    const cards = [
        { numberQuestion: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", },
        { numberQuestion: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { numberQuestion: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { numberQuestion: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { numberQuestion: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { numberQuestion: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { numberQuestion: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { numberQuestion: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]


    return (
        <StyleSeparateContent>
            <StyleContent>
            {cards.map((question,index)=>  <Question key={index} text={question.numberQuestion}/>)}   
            
            </StyleContent>
        </StyleSeparateContent>
    )
}

const StyleSeparateContent = styled.div`
   
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;

`
const StyleContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    margin-top: 200px; 
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
    padding-top: 20px; 
    box-sizing: border-box; 

`