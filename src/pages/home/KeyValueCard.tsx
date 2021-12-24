import styled from "styled-components"

const KeyValueCardContainer = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    background-color: #fffcf9;
    font-size: 1vw;
`
const KeyValueCardDataContainer = styled.div`
    width: 70%;
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
    width: 2vw;
    height: 2vw;
    margin: 1vw;
    padding: 0.5vw;
    box-sizing:border-box;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content:center;
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