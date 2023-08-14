import Aside from './layouts/Aside'
import Nav from './layouts/Nav'

function App() {

  return (
    <section className='flex flex-row font-inter w-screen bg-blue-50/50'>
      <Aside />
      <section>
        <Nav />
        <main>
          asd
        </main>
      </section>
    </section>
  )
}

export default App
