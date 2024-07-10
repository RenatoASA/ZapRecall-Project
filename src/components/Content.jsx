import Question from './Question'
import styled from 'styled-components'
import { useState } from "react";
import Bottom from './Bottom';

export default function Content() {
    const [count, setCount] = useState(0);
    

    const cards = [
        { numberQuestion: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", count: 0},
        { numberQuestion: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" , count: 0},
        { numberQuestion: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula", count: 0 },
        { numberQuestion: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões", count: 0 },
        { numberQuestion: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", count: 0 },
        { numberQuestion: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", count: 0 },
        { numberQuestion: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes", count: 0 },
        { numberQuestion: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", count: 0 }
    ];

   
//    const handleAnswered = () => {
//     setAnswerCount(prevCount => prevCount + 1);
// };

    //  console.log("answerCount:", answerCount);
    console.log("count no Content: "+ count);
    return (
        <StyleSeparateContent>
            <StyleContent>
                {cards.map((card, index) => (
                    <Question key={index} text={card.numberQuestion} question={card.question} answer={card.answer} count={count} setCount={setCount} />
                    ))}
           
                <Bottom count={count} totalCount={cards.length}  />
                
            </StyleContent>
        </StyleSeparateContent>
    );
    
}

const StyleSeparateContent = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`;

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
`;






// import Question from './Question'
// import styled from 'styled-components'
// import { useState } from "react";
// import Bottom from './Bottom';

// export default function Content() {
//     const [answerCount, setAnswerCount] = useState(0);
    

//     const cards = [
//         { numberQuestion: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
//         { numberQuestion: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
//         { numberQuestion: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
//         { numberQuestion: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
//         { numberQuestion: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
//         { numberQuestion: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
//         { numberQuestion: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
//         { numberQuestion: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
//     ]

//     const handleAnswered = () => {
//         setAnswerCount(prevCount => prevCount + 1);
//     };

//     return (
//         <StyleSeparateContent>
//             <StyleContent>
//                 {cards.map((card, index) => (
//                     <Question key={index} text={card.numberQuestion} question={card.question} answer={card.answer} onAnswered={handleAnswered} />)
//                 )}
//                 <Bottom Count={answerCount} totalCount={cards.length} />
                        
//             </StyleContent>
//         </StyleSeparateContent>
//     ) 
// }

// const StyleSeparateContent = styled.div`
   
//     flex: 1;
//     width: 100%;
//     display: flex;
//     justify-content: center;

// `
// const StyleContent = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: blue;
//     margin-top: 200px; 
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     overflow-y: auto;
//     padding-top: 20px; 
//     box-sizing: border-box; 

// `