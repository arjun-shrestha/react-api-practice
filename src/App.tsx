import { useState } from 'react'
import './App.css'
import axios from 'axios'
import FetchUserData from './modules/user/components/FetchUserData'
import Pagination from './modules/user/components/Pagination'

function App() {
  // const [count, setCount] = useState(0)

const [currentPage, setCurrentPage] = useState(1);
const lastPage = 3;


const GetJokes = () =>{
  axios.get('https://official-joke-api.appspot.com/random_joke').then(
    (response) => {
      console.log(response)
    }
  )
}

const body = [
  {
    name : "Arjun Shrestha",
    post : "Software Engineer"
  },
  {
    name: "Sagar Maharjan",
    post : "Software/UI/UX Engineer"
  }
]


const PostJokes = () =>{
  axios.post('https://official-joke-api.appspot.com/random_joke',body ).then(
    (response) => {
      console.log(response)
    }
  )
}

const Delete = () =>{
  axios.post('https://official-joke-api.appspot.com/random_joke',body ).then(
    (response) => {
      console.log(response)
    }
  )
}


  return (
    <>
      <Pagination currentPage={currentPage}
    lastPage={lastPage} 
    maxLength={7}
    setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App
