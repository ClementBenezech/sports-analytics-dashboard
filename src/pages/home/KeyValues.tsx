import styled from "styled-components"
import useFetchApiData from "../../utils/useFetchApiData";
import { userData } from "../../utils/types/types";
import { notFoundIcon } from "../../constants/constants";
import KeyValueCard from "./KeyValueCard";
import { keyValuesLabelsAndIcons } from "../../constants/constants";

const KeyValuesContainer = styled.div`
    width: 24vw;
    height: auto;
    background-color:white;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-evenly;
    font-size: 2vw;
    color: black;
    & i {
        color: red;
    }
`;


const KeyValues = (props : {userId : string}) => {

    const [currentUserApiData] = useFetchApiData(props.userId as string, {} as userData )

        if (currentUserApiData === null) {
            return (
                <KeyValuesContainer><i className = "fas fa-basketball-ball fa-spin"></i></KeyValuesContainer>
            )
        } else if (currentUserApiData === undefined) {
            return (
                <KeyValuesContainer><i className={notFoundIcon}></i>Utilisateur inconnu</KeyValuesContainer>
            )
        } else {
            const keyValuesElementArray:JSX.Element[] = Object.keys(currentUserApiData.keyData).map(key => {

                const currentKeyValue = keyValuesLabelsAndIcons.filter(element => element.key === key)
                
                return <KeyValueCard theKey = {key} keyLabel = {currentKeyValue[0].data.label} keyValue = {currentUserApiData.keyData[key]}/>
            })
            return (  
                <KeyValuesContainer>
                    {keyValuesElementArray}
                </KeyValuesContainer>
            )           
        }
}

export default KeyValues