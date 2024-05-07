import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavComponent from './components/Navbar/NavComponent'
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LoginAndRegister from './components/login/LoginAndRegister'
import ContributionForm from './components/eventsPage/ContributionForm'


function App() {
  return (
    <>
      <NavComponent />

      <BrowserRouter>
        <Routes>
          <Route path='/'element={<LoginAndRegister/> }/>
          <Route path='/home'element={<LandingPage/>}/>
          <Route path='/events'element={<ContributionForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
