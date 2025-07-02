import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as yup from 'yup'
import { Add } from './pages/connexion/add'
import data from './data'
import { Suivie } from './pages/auth/suivie'
import { Recapitulatif } from './pages/global/recap'
import { Rec } from './pages/auth/enregistrement'
import { Nbre } from './pages/auth/nombre_de_jours'
function App() {
  

 /*  const [formData, setFormData] = useState({data})
  console.log(formData) */
  const dtajson=JSON.stringify(data)

  const datajson=JSON.parse(dtajson)

  return<>
    <Rec/>
     
  </>
}

export default App
