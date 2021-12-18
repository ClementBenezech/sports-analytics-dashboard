import './App.css';
import useFetchApiData from './utils/useFetchApiData'
import { userData } from './utils/types/types';
import { userActivity } from './utils/types/types';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';


function App() {

  //Setting up a custom hook to fetch user data
  const [currentUserApiData]          = useFetchApiData("12" as string, {} as userData )
  const [currentUserActivityApiData]  = useFetchApiData("12/activity" as string, {} as userActivity )

  if (currentUserApiData === null || currentUserActivityApiData === null) {
  return (
    <header className="App-header">
      <div>Fetching data, please wait...</div>
    </header>
  )
  } else if (currentUserApiData === undefined || currentUserActivityApiData === undefined) {
    return (
        <div className="App">
        <header className="App-header">
          <div>Sorry, user does not exist</div>
        </header>
        </div>
    )
  } else {
    return (
      <div className="App">
      <Header/>
      <SideBar/>
      <MainContent/>
      {/*<div>{currentUserApiData.id}</div>
      <div>{currentUserActivityApiData.userId}</div>*/}
      </div>
  )
  }
}

export default App;
