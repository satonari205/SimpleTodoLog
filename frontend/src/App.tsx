import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import { Tasks } from './routes/Tasks';
import { Diary } from './routes/Diary';
import { Calendar } from './routes/Calendar';
import { Profile } from './routes/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/todos" element={<Tasks />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
