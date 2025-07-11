import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Stuff from './components/projects/stuff/Stuff'
import NNTLanding from './components/projects/nnt/Landing'
import NNTMainSocialContent from './components/projects/nnt/MainSocialContent'
import NNTTiktoks from './components/projects/nnt/Tiktoks'
import ECN from './components/projects/ecn/ECN'
import Devono from './components/projects/devono/Devono'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/stuff" element={<Stuff />} />
        <Route path="/projects/nnt" element={<NNTLanding />} />
        <Route path="/projects/devono" element={<Devono />} />
        <Route path="/projects/ecn" element={<ECN />} />
        <Route path="/projects/nnt/main-social-content" element={<NNTMainSocialContent />} />
        <Route path="/projects/nnt/tiktoks" element={<NNTTiktoks />} />
      </Routes>
    </Router>
  )
}

export default App;
