import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <>
<Navbar/>
      <div>
       <Card name="Shruti" age={18}/>
       <br />
       <Card name="Meher" age={28}/>
       <br />
       <Card name="Vidhya" age={16}/>
       
      </div>
    </>
  )
}

export default App
