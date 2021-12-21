import styled from "styled-components"

const KeyValueCardContainer = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    background-color: #fffcf9;
`
const KeyValueCardDataContainer = styled.div`
    width: 70%;
`
const KeyValueCardLabel = styled.div`
    width: 100%;
`
const KeyValueCardValue = styled.div`
    width: 100%;
`
const KeyValueCardIcon = styled.img`
    width: 5vw;
    height: 5vw;
    padding: 1vw;
    box-sizing:border-box;
`

const KeyValueCard = (props: {theKey:string, keyLabel:string, keyValue:number}):JSX.Element => {

    return      <KeyValueCardContainer>
                    <KeyValueCardIcon src = {"images/"+props.theKey+".svg"}/>
                    <KeyValueCardDataContainer>
                        <KeyValueCardLabel>{props.keyLabel}</KeyValueCardLabel>
                        <KeyValueCardValue>{props.keyValue}</KeyValueCardValue>
                    </KeyValueCardDataContainer>
                </KeyValueCardContainer>
}
export default KeyValueCard