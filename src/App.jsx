import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Offers from './pages/Offers'
import Dining from './pages/Dining'
import Amenities from './pages/Amenities'
import Events from './pages/Events'
import LocalGuide from './pages/LocalGuide'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/local-guide" element={<LocalGuide />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}