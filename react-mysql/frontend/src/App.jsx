import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Upload from './Upload'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/create' element={<Create />} />
        <Route path ='/read/:id' element={<Read />} />
        <Route path ='/edit/:id' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App