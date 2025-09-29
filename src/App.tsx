import Navbar from './components/navbar/navbar'
import Information from './components/information/information'
import './App.css'
import Votar from './components/votar/votar'
import AdvientoCalendar from './components/advientoCalendar/advientoCalendar'
import Testimonios from './components/testimonios/testimonios'
import { advientoDays } from './data/advientoData'

function App() {

  return (
    <>
      <Navbar />
      <Information />
      <Votar  />
      <AdvientoCalendar days={advientoDays} />
      <Testimonios />
    </>
  )
}

export default App
