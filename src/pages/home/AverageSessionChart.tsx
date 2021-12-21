import { ResponsiveContainer, Line, LineChart, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { userAverageSessions } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';

const AverageSessionChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/average-sessions' as string, {} as userAverageSessions )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.sessions)
        return (
            <ResponsiveContainer width="25%" height={280}> 
                <LineChart
                barCategoryGap="30%"
                barGap="10%"
                width={400}
                height={400}
                data={currentUserActivityApiData.sessions}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis dataKey="day" fontSize={20}/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="sessionLength" fill="black" yAxisId={0} />
                </LineChart>
            </ResponsiveContainer>
    )
    } else {
        return <div><i className = "fas fa-basketball-ball fa-spin"></i></div>
    }
    
    
} 

export default AverageSessionChart