import { useEffect, useState } from "react"

import donnee from './definition.json'

export function Suivie(){
    const [stagiaires,setStagiaires]=useState([])

    useEffect(()=>{
        const data=localStorage.getItem("data")
        if(data){
            setStagiaires(JSON.parse(data))
        }
    },[])

    donnee.push(stagiaires)

    console.log(donnee)

    
    
    
    console.log(stagiaires)

    

    const supprimerutilisateurs=(id)=>{
        
        if(confirm("Attention cette action est irreversible !!!")){
            const newstagiares=stagiaires.filter(s=> s.id !==id)
            

        setStagiaires(newstagiares)
        localStorage.setItem('data',JSON.stringify(newstagiares))
        }else{
            return 0
        }
    }

    const modifierinformations=(id)=>{
        const editstagiaires=stagiaires.filter(e=> e.id===id)
        editstagiaires[0]['nom']="Jean"
        setStagiaires([...stagiaires,editstagiaires])
        localStorage.setItem('data',JSON.stringify(stagiaires))
        console.log(...stagiaires)
    }


    return<>

    
        
    </>
}