import styled from "styled-components"

const KeyValueCardContainer = styled.div`
    width: 100%;
    height: 20%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    background-color: #fffcf9;
    font-size: 1vw;
    align-content:center;
    justify-items:center;
    align-items:center;
`
const KeyValueCardDataContainer = styled.div`
    width: auto;
    height: 4vw;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content:center;
    justify-items:center;
`
const KeyValueCardLabel = styled.div`
    width: 100%;
`
const KeyValueCardValue = styled.div`
    width: 100%;
    font-weight: bold;
`
const KeyValueCardIcon = styled.img`
    width: 3vw;
    height: 3vw;
    padding: 0.5vw;
    margin-left: 2vw;
    box-sizing:border-box;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    justify-items:center;
    background-color: lightgrey;
    border-radius: 0.2vw;
`

const KeyValueCard = (props: {theKey:string, keyLabel:string, keyValue:number}):JSX.Element => {

    return      <KeyValueCardContainer>
                    <KeyValueCardIcon src = {"images/"+props.theKey+".svg"}/>
                    <KeyValueCardDataContainer>
                        <KeyValueCardValue>{props.keyValue}</KeyValueCardValue>
                        <KeyValueCardLabel>{props.keyLabel}</KeyValueCardLabel>
                    </KeyValueCardDataContainer>
                </KeyValueCardContainer>
}
export default KeyValueCard