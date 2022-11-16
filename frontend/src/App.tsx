import Header from "./assets/components/Header"
import NotificationButton from "./assets/components/NotificationButton"
import SalesCard from "./assets/components/SalesCard"

function App() {

  return (
    <div>
      <Header />
      <main>
        <section id="sales">
          <div className ="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </div>
  )

}

export default App
