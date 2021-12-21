import { ResponsiveContainer, Bar, BarChart, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { userActivity } from '../../utils/types/types';
import useFetchApiData from '../../utils/useFetchApiData';

const ActivityChart = (props:{userId : string}):JSX.Element => {

    const [currentUserActivityApiData] = useFetchApiData(props.userId+'/activity' as string, {} as userActivity )

    if (currentUserActivityApiData !== null && currentUserActivityApiData !== undefined) {
        console.log(currentUserActivityApiData.sessions)
        return (
            <ResponsiveContainer width="100%" height='40%'> 
                <BarChart
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
                    <Bar type="monotone" dataKey="kilogram" fill="black" radius={[10, 10, 0 , 0]} yAxisId={0} />
                    <Bar type="monotone" dataKey="calories" fill="red"  radius={[10, 10, 0 , 0]} yAxisId={1} />
                </BarChart>
            </ResponsiveContainer>
    )
    } else {
        return <div><i className = "fas fa-basketball-ball fa-spin"></i></div>
    }
    
    
} 

export default ActivityChart