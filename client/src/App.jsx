import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './assets/Home'
import SignUp from './assets/SignUp'
import Profile from './assets/Profile'
import About from './assets/about'
import SignIn from './assets/Signin'
import Header from './components/Header'
export default function App() {
  return <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </BrowserRouter>
}