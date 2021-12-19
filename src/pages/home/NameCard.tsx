import styled from "styled-components"
import useFetchApiData from "../../utils/useFetchApiData";
import { userData } from "../../utils/types/types";
import { notFoundIcon } from "../../constants/constants";

const NameCardContainer = styled.div`
    width: 24vw;
    height: 5vw;
    background-color:white;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    font-size: 2vw;
    color: black;
    & i {
        color: red;
    }
`;

const NameCardLabel = styled.div`
    width: 50%;
`

const NameCardValue = styled.div`
    width: 50%;
    color: red
`

const NameCard = (props : {userId : string}) => {

    const [currentUserApiData] = useFetchApiData(props.userId as string, {} as userData )

        if (currentUserApiData === null) {
            return (
                <NameCardContainer><i className = "fas fa-basketball-ball fa-spin"></i></NameCardContainer>
            )
        } else if (currentUserApiData === undefined) {
            return (
                <NameCardContainer><i className={notFoundIcon}></i>Utilisateur inconnu</NameCardContainer>
            )
        } else {
            return (  
                <NameCardContainer>
                    <NameCardLabel>Bonjour</NameCardLabel>
                    <NameCardValue>{currentUserApiData?.userInfos.firstName}</NameCardValue>
                </NameCardContainer>
            )
        }

    
}

export default NameCard