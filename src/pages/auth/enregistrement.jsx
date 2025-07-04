import { useEffect, useState } from "react"
import data1 from './definition.json'
import { data } from "react-router-dom"
import { date, object } from "yup"

export function Rec(){

    const button ="w-fit-content bg-green-600 rounded-2xl text-white flex justify-center py-2 m-auto  hover:cursor-pointer hover:bg-green-900 "
    const d=new Date()
    const datetime=d.toDateString()

    /* localStorage.setItem("historique",JSON.stringify(data1)) */
    
      const [stagiaires,setStagiaires]=useState([])
      const [historique,setHistorique]=useState([])

     useEffect(()=>{
        const data=localStorage.getItem("data")
        const statistique=localStorage.getItem("historique")
        if(data || statistique){
            setStagiaires(JSON.parse(data))
            setHistorique(JSON.parse(statistique))
        }
    },[])


// Gerer le checked
// Debut de la fonction handlecheck
        const handleCheck=(index)=>{

//Initialisation de l'heure
        let heureRef=8
        let d=new Date()
        let hours1=heureRef-d.getHours()
        const hours=d.toLocaleTimeString()
        const olock=hours
        const date=d.toLocaleDateString()

// Utilisation de la decomposition pour garder des valeurs préexistantes
            
        const person_global=[...stagiaires]
        person_global[index].presence[0].statut_presence="present"
        person_global[index].presence[0].heure_arrivee=olock
        setStagiaires(person_global)

//Conversion en tableau de valeurs 

        const conversion =Object.values(person_global[index])
        localStorage.setItem("data",JSON.stringify(person_global))
        const presente=person_global[index].presence[0].statut_presence? true:false        
        
//Enregistrement des informations dans une variable global Pour l'enregistrement
        const global={
            nom:conversion[0],
            prenom:conversion[1],
            Date:date,
            Presence:presente
        }


//Stockage dans le localStorage 
  
        const jean=[...historique,global]
        localStorage.setItem("historique",JSON.stringify(jean))
        setHistorique(jean)

        
        
        

//Mettre enregistrements des elements dans le tableau 

        /* const take=JSON.parse(localStorage.getItem(data1))
        take.push(person_global)
         localStorage.setItem("historique",JSON.stringify(take)) */

      /*   if(hours1<0 || hours1>heureRef){
            message="Retard"
        }else{
            message="A l'heure"
        }
 */
}

//Marquer Les noms et et prenoms des personnes nombre de personne personne presente et absentes ce jours                  

    /*   stagiaires.filter(y=>y.presence.filter(presence=>{
        if(presence.statut_presence=="present"){
               console.log(y);
               
                
                
        }})) 

        const yes=Object.entries(search_person)

        console.log(search_person); */

       /*  const f1=stagiaires.filter(t=>t.presence)

        let f2=f1.filter(h=>{
            if(h.statut_presence==""){
                console.log(f2);
                
            }
        })
        console.log(f2);
         */

       /* console.log(search_person); */

       
       

                /* const searchperson=stagiaires.filter(person=>person.id)

                const a=searchperson.filter(sear=>{
                    if(sear.statut_presence==""){
                        console.log(sear)
                    }
        
                }) 
         */
    return <>


            <table className='border-1 text-center w-[80%] mx-auto my-50'>
                <caption style={{padding:"17px"}} >Stagiaires</caption>
                <thead>
        <tr>
                <td colSpan="7" style={{padding:"10px"}} className='bg-gray-200'>Developement logiciel</td>
        </tr>
          <tr className='border-1'>
            <th className='border-1'>Nom</th>
            <th className='border-1'>Prenom</th>
            <th className='border-1'>Present</th>
            <th className='border-1'>Heure d'arrivée </th>
            <th className='border-1'>Decision</th>
          </tr>
          {stagiaires.map((s,index)=>
        (<tr className='border-1' key={index}>
            <td className='border-1'>{s.nom}</td>
            <td className='border-1'>{s.prenom}</td>
            <td className='border-1'><input 
            type="checkbox" 
            name="checked" 
            key={index}   
            /* checked={s.presence[0].checked=checked}
            disabled={s.presence[0].checked=checked } */
            onClick={()=> handleCheck(index)}
            />
            </td>
            <td className='border-1'>{s.presence.map((p,index)=>(
                <td key={index} className="text-center flex justify-center hover:opacity-50 cursor-not-allowed" >{p.heure_arrivee} {p.statut_presence }
                
                    </td>
                ))}</td> 
        </tr>)
        )}
        
        
                    
                </thead>
            </table> 

                    <h2 align="center" className="font-bold text-2xl"> {datetime} </h2>
            <div className="flex justify-around w-[80%] m-auto">
                <button type="button" className={button} >
                    Nombre de personne absent
                </button>
                <button type="button" className={button}>
                    Nombre de personne present
                </button>
            </div>






    {/* <div className="items-center flex justify-center min-h-screen p-2 border-2 flex-col">
        <h2 className="my-4 text-3xl font-bold">Liste de presence</h2>

        {
            stagiaires.map((s,index)=>(<div className="my-4 font-serif flex" key={s.id}>
               <span className="mx-4">{s.nom} {s.id} </span> 
                <span className="mx-4">{s.prenom} {s.id} </span>
                <span className="mx-4">{s.formation} {s.id} </span>
                <span className="mx-4">{s.presence.map(p=>(<div key={s.id}>
                    <span className="mx-4">{p.statut_presence? p.statut_presence:""}</span>
                    <input type="checkbox"onClick={()=> handleCheck(s.id,index)}/> Cocher pour mettre à jour votre heure
                    <span className="mx-4">{p.heure_arrivee}</span>
                    <span className="mx-4">{p.heure_de_depart}</span>
                </div>))}</span>


            </div>))
        }
    </div> */}
    

    
    </>
}