import { ResponsiveContainer, Bar, BarChart, XAxis, Tooltip, CartesianGrid, YAxis } from 'recharts';
import { userActivity } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';
import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';


const Wrapper = styled.div`
    background-color: #FBFBFB;
    border-radius: 0.3vw;
    width: 100%;
    height: 13vw;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1vw;
    font-size: 1vw;
    & i {
        color: red;
    }

    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
        height: 35vh;
        padding: 0vw;
        margin: 2vh 0 2vh 0;
        font-size: 2vh;
    }

`

/**
 * Renders the activity chart based on the /user/{userId}/activity route of the API
 * @param { String } userId
 * @return { JSX.Element }
 */

const ActivityChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/activity' as string, {} as userActivity )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.sessions)

        const readyToDisplay:any[] = currentUserActivityApiData.sessions.map(session => {
            return (
            {
                calories: session.calories,
                day: session.day.slice(session.day.length -1), 
                kilogram: session.kilogram
            })
        })

        return (
           <Wrapper>
           <ResponsiveContainer width="100%" height='100%'> 
                <BarChart
                barCategoryGap="30%"
                barGap="10%"
                width={400}
                height={400}
                data={/*currentUserActivityApiData.sessions*/readyToDisplay}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <YAxis tickLine={false} axisLine={false} interval={1} tickMargin={15} yAxisId="right" orientation="right" domain={['dataMin - 1', 'dataMax + 1']}/>
                    <XAxis dataKey="day" fontSize={20}/>
                    <YAxis yAxisId="left" orientation="left" hide={true}  />
                    <Tooltip labelStyle={{'display':'none'}} />

                    <Bar type="monotone" dataKey="kilogram" fill="black" radius={[10, 10, 0 , 0]} yAxisId="right" barSize={10} />
                    <Bar type="monotone" dataKey="calories" fill="red"  radius={[10, 10, 0 , 0]}  yAxisId="left" barSize={10} />
                </BarChart>
            </ResponsiveContainer>
            </Wrapper>
    )
    } else {
        return <Wrapper><i className = "fas fa-basketball-ball fa-spin"></i></Wrapper>
    }
    
} 

export default ActivityChart