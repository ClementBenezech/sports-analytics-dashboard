import { ResponsiveContainer, Line, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { userAverageSessions } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

const Wrapper = styled.div`
    background-color: #FF0000;
    border-radius: 0.3vw;
    width: 18vw;
    height: 18vw;
    display:flex;
    justify-content:center;
    align-items:center;
    & i {
        color: black;
    }

    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
        height: 35vh;
        margin: 2vh 0 2vh 0;
    }
`

/**
 * Renders the activity chart based on the /user/{userId}/average-sessions route of the API
 * @param { String } userId
 * @return { JSX.Element }
 */

const AverageSessionChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/average-sessions' as string, {} as userAverageSessions )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.sessions)

        const daysOfWeekInitials:string[] = ['L','M','M','J','V','S','D']
  
        let i = -1
        const readyToDisplay:any[] = currentUserActivityApiData.sessions.map(session => {
            console.log(session)
            console.log(session.day)
            i++
            return (
            {
                sessionLength: session.sessionLength,
                day: daysOfWeekInitials[i]
            })
        })

        return (
            <Wrapper>
            <ResponsiveContainer width="100%" height='100%' > 
                <LineChart
                width={400}
                height={400}
                data={/*currentUserActivityApiData.sessions*/readyToDisplay}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="day" fontSize={20} stroke="white"/>
                    <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} hide={true} />
                    {/*<CartesianGrid stroke="#f5f5f5"  />*/}
                    <Line type = 'natural' stroke = "white" strokeWidth = "3px" dataKey="sessionLength"  dot={false}/>
                    <Tooltip  formatter={(value:string, name:string) => [value + " min", null]} contentStyle={{ color: 'blue', backgroundColor: "lightgrey"}} labelStyle={{'display':'none'}}/>
                </LineChart>
            </ResponsiveContainer>
            </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
} 

export default AverageSessionChart