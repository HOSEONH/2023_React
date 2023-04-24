import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home.jsx';
import NavHeader from './components/NavHeader.jsx';
import StoryList from './page/StoryList.jsx';
import Story from './page/Story.jsx';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <NavHeader />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/storylist' element={<StoryList />}>
            <Route path='/storylist/:name' element={<Story />}/>
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;