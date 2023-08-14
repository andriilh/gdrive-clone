import { ArrowDropDown, InfoOutlined, ViewList } from '@mui/icons-material'
import Button from './components/common/Button'
import Aside from './layouts/Aside'
import Nav from './layouts/Nav'

function App() {

  return (
    <section className='flex flex-row font-inter w-screen h-screen bg-blue-50/50'>
      <Aside />
      <section className='px-4'>
        <Nav />
        <main className='rounded-2xl bg-white h-[calc(100vh-4.5rem)] w-full overflow-auto text-gray-700'>
          <div className='flex items-start justify-between mt-5'>
            <div className='rounded-full hover:bg-gray-200 hover:text-gray-950 py-1 ml-2 px-3 text-3xl flex items-center cursor-pointer transition-all'>
              My Files
              <ArrowDropDown className='w-16 h-16 ml-1' />
            </div>
            <div className='flex items-center mr-4'>
              <Button rounded='full'>
                <ViewList className='w-10 h-10' />
              </Button>
              <Button rounded='full'>
                <InfoOutlined className='w-10 h-10' />
              </Button>
            </div>
          </div>
          <div className="inline-flex mt-3 ml-5 gap-4">
            <Button className='border-2 border-gray-500'>
              Type
              <ArrowDropDown className='w-16 h-16 ml-1' />
            </Button>
            <Button className='border-2 border-gray-500'>
              People
              <ArrowDropDown className='w-16 h-16 ml-1' />
            </Button>
            <Button className='border-2 border-gray-500'>
              Modified
              <ArrowDropDown className='w-16 h-16 ml-1' />
            </Button>
          </div>

        </main>
      </section>
    </section>
  )
}

export default App
