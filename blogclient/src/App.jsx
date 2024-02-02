import React, { useEffect, useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import { Homepage } from './Pages/Homepage';
import { Dashboard } from './Pages/Dashboard';
import { NewPost } from './Pages/NewPost';
import { Posts } from './Pages/Posts';

function App() {
  const [bool, setBool] = useState(false)
  useEffect(()=>
  {
    const user = localStorage.username
    if(user){
      setBool(true)
    }
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            {
              bool && 
              <>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/newpost' element={<NewPost/>} />
                <Route path='/allblogs' element={<Posts/>} />
              </>
            }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
