import styled from "styled-components"


export default function Bottom() {
    return (
        <StyleBottom>
            <span>0/4 comcluido</span>
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