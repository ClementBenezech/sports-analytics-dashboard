import styled from "styled-components"
import breakpoints from "../../utils/breakpoints"

const KeyValueCardContainer = styled.div`
    width: 100%;
    height: 20%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    background-color: #fbfbfb;
    font-size: 1vw;
    align-content:center;
    justify-items:center;
    align-items:center;

    @media only screen and ${breakpoints.device.xs}{
        width: 20%;
        height: max-content;
        font-size: 1.5vh;
        border-radius: 2vh;
        overflow:hidden;
        border: 1px solid lightgrey;
        margin: 1vw;
    }
`
const KeyValueCardDataContainer = styled.div`
    width: auto;
    height: 10vh;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-content:center;
    justify-items:center;
    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
    }
`
const KeyValueCardLabel = styled.div`
    width: 100%;
`
const KeyValueCardValue = styled.div`
    width: 100%;
    font-weight: bold;
`
const KeyValueCardIcon = styled.img`
    height: 10vh;
    padding: 0.5vw;
    margin-left: 2vw;
    box-sizing:border-box;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    justify-items:center;
    border-radius: 0.2vw;
    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
        font-size: 1.5vh;
        margin:0;
    }
`

/**
 * Renders a specific "Key value" card (calories, lipids, carbohydrates...)
 * @param { string } theKey is the key ID, used to determin the logo to display
 * @param { string } keyLabel
 * @param { number } keyValue
 * @param { string } color used to determine background color of the logo div
 * @return { JSX.Element }
 */

const KeyValueCard = (props: {theKey:string, keyLabel:string, keyValue:number, color: string}):JSX.Element => {

    return      <KeyValueCardContainer>
                    <KeyValueCardIcon style={{backgroundColor: props.color}} src = {"images/"+props.theKey+".svg"}/>
                    <KeyValueCardDataContainer>
                        <KeyValueCardValue>{props.keyValue}</KeyValueCardValue>
                        <KeyValueCardLabel>{props.keyLabel}</KeyValueCardLabel>
                    </KeyValueCardDataContainer>
                </KeyValueCardContainer>
}
export default KeyValueCard