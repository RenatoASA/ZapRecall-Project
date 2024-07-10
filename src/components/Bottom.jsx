import styled from "styled-components"



export default function Bottom({count, totalCount}) {
    console.log("Count:", count, "totalCount:", totalCount);
    
    return (
        <StyleBottom>
            <span> {count} / {totalCount} Concluido</span>
        </StyleBottom>
      
    )
}

const StyleBottom = styled.div`
    width: 375px;
    height: 77px;
    background-color: green;
    position: fixed;
    bottom: 0px;
    align-items: center;
    justify-content: center;
    display: flex;

`