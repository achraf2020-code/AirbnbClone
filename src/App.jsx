import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./assets/data"

const dataItems = data.map((e)=>{
    return(
      <Card
        key={e.id} 
        {...e}
      />
    )
})

function App() {
  

  return (
      <div>
        <Navbar/>
        <Hero/>
        <section className="card--container">
          {dataItems}
        </section> 
      </div>
  )
}

export default App
