import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';


function App() {

    return (
      <div className="App">
      <Header/>
      <SideBar/>
      <MainContent userId = '17'/>
      </div>
  )
}

export default App;
