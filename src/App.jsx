import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as yup from 'yup'
import { Add } from './pages/connexion/add'
import data from './data'
function App() {

 /*  const [formData, setFormData] = useState({data})
  console.log(formData) */
  const dtajson=JSON.stringify(data)

  const datajson=JSON.parse(dtajson)

  return<>
    <Add/>
     
  </>
}

export default App
