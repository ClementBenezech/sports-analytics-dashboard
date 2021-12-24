import { ResponsiveContainer, Line, LineChart, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { userAverageSessions } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #FF0000;
    border-radius: 0.3vw;
    width: 15vw;
    height: 15vw;
    display:flex;
    justify-content:center;
    align-items:center;
    & i {
        color: black;
    }
`

const AverageSessionChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/average-sessions' as string, {} as userAverageSessions )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.sessions)
        return (
            <Wrapper>
            <ResponsiveContainer width="100%" height='100%' > 
                <LineChart
                barCategoryGap="30%"
                barGap="10%"
                width={400}
                height={400}
                data={currentUserActivityApiData.sessions}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="day" fontSize={20} stroke="white"/>
                    <Tooltip />
                    {/*<CartesianGrid stroke="#f5f5f5"  />*/}
                    <Line stroke = "white" type="monotone" dataKey="sessionLength" fill="white" yAxisId={0} />
                </LineChart>
            </ResponsiveContainer>
            </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
} 

export default AverageSessionChart