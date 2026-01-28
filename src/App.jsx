import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards.jsx' 
import Hello from './Hello.jsx'
function App() {

  return (
    <>
<Hello/>
<Hello/>

<img src={viteLogo} className="logo" alt="Vite logo" />
    <Cards/>
    
    </>
  )
}

export default App
