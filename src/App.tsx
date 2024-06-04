
import { useState } from 'react'
import './App.css'
import Query from './features/search/Query'
import Shelf from './features/shelf/Shelf'
function App() {

  const [activeTab, setActiveTab] = useState("search")
  return (
    <>
      <div className='max-w-4xl p-4 mx-auto ' >
        <div className='flex my-8 cursor-pointer ' >
          <div onClick={() => setActiveTab("search")} className={`grow text-center rounded-l p-2 ${activeTab === "search" ? "bg-gray-800 text-white" : "bg-gray-100"} `}>Search</div>
          <div onClick={() => setActiveTab("shelf")} className={`grow text-center rounded-l p-2 ${activeTab === "shelf" ? "bg-gray-800 text-white " : "bg-gray-100"} `} >Bookshelf</div>
        </div>
        {activeTab === "search" ? (
          <Query />
        ) : (
          <Shelf />
        )}


      </div>

    </>
  )
}

export default App
