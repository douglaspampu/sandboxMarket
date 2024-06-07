import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './components/home/Home';
import { ChatWidgetComponent } from './components/ChatWidget/ChatWidget';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />}/>
      </Routes>
      <ChatWidgetComponent />
    </>
  );
}

export default App;
