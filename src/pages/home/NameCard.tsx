import styled from "styled-components"
import useFetchApiData from "../../utils/useFetchApiData";
import { userData } from "../../utils/types/types";
import { notFoundIcon } from "../../constants/constants";
import breakpoints from "../../utils/breakpoints";

const NameCardContainer = styled.div`
    width: 100%;
    height: 3vw;
    background-color:white;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    font-size: 3vw;
    color: black;
    font-weight:bold;
    margin-top: 2vw;
    & i {
        color: red;
    }

    @media only screen and ${breakpoints.device.xs}{
        padding: 1vw;
        height: auto;
        margin: 2vh 0 2vh 0;
    }
`;

const NameCardLabel = styled.div`
    width: max-content;
    margin: 0 1vw 0 0;
`

const NameCardValue = styled.div`
    width: max-content;
    color: red;
`

/**
 * Renders a card displaying the name of the user.
 * @param { String } userId
 * @return { JSX.Element }
 */

const NameCard = (props : {userId : string}):JSX.Element => {

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