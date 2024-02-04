import { FC } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import { Tasks } from './routes/Tasks';
import { Diary } from './routes/Diary';
import { Calendar } from './routes/Calendar';
import { User } from './routes/User';

function App(): FC {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/todos" element={<Tasks />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/calender" element={<Calendar />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
