import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import About from './About/About';
import Courses from './Courses/Courses';
import Teachers from './Teachers/Teachers';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Playlist from './Playlist/Playlist';
import WatchVideo from './Watch_video/WatchVideo';
import TeacherProfile from './Teacher_profile/TeacherProfile';
import Register from './Register/Register';
import Update from './Update/Update';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watch-video" element={<WatchVideo />} />
        <Route path='/teacher-profile' element={<TeacherProfile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update-profile' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
