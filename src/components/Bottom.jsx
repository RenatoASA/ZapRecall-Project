import styled from "styled-components"



export default function Bottom({count, totalCount}) {
    
    return (
        <StyleBottom>
            <span>{count} / {totalCount} Concluido</span>
        </StyleBottom>
      
    )
}

const StyleBottom = styled.div`
    width: 375px;
    height: 77px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0px;
    align-items: center;
    justify-content: center;
    display: flex;

`