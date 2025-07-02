import { useEffect, useState } from "react";
import  data  from "./data.json";


export function Add(){
     const input =" border-2 border-blue-900 border-gray-300 w-full p-2 rounded-lg mb-4 hover:border-green-500 focus:border-blue-500";
     const button ="w-[90%] bg-green-600 rounded-2xl text-white flex justify-center py-2 m-auto  hover:cursor-pointer hover:bg-green-900 "

//Initialisation des donées dans le formulaire
     const [formdata,setFormdata]=useState({
        id:"",
        nom:"",
        prenom:"",
        formation:"",
        date_de_debut:"",
        date_de_fin:"",
        presence:[
            {
            heure_arrivee:"",
            heure_depart:"",
            statut_presence:""
        }
        ]
     });

//Permettre la mise à jour à chaque changement dans le formulaire
        const handleChange=(e)=>{
            const {name,value}=e.target;
            setFormdata({
                ...formdata,
                [name]:value,
                id:Date.now()
            })
        }

        console.log(data);
        

//Stockage des données dans le localstorage
//Reception des données et affichage des données dans la console
/*   localStorage.setItem("data",JSON.stringify(data)) */

        const handleSubmit=(e)=>{
            e.preventDefault();
            const anciens=JSON.parse(localStorage.getItem("data"));
           anciens.push(formdata);
           localStorage.setItem("data",JSON.stringify(anciens));
           setFormdata({
                nom:"",
                prenom:"",
                formation:"",
                date_de_debut:"",
                date_de_fin:"",
                presence:[
                    {
                    heure_arrivee:"",
                    heure_depart:"",
                    statut_presence:""
                }
                ]
           });
            alert("Informations Enregstrées avec succès")
            
        }

        /*   useEffect(()=>{
            localStorage.clear("data")
        },[])
  */

//Stockage des informations dans le localstorage
        


    

    return <>
            <div className="flex items-center justify-center min-h-screen bg-[#19161D]">
                <form action="" method="post" className="backdrop-blur-xl bg-white/90 p-10 rounded-lg shadow-amber-100 shadow-l w-140 flex items-center justify-center flex-col" onSubmit={handleSubmit}>
                    <h1 align="center" className="mb-10 flex flex-col items-center text-2xl font-bold">Ajouter des stagiaires</h1>
                    <div className="flex flex-col w-full">
                        <input type="text" name="nom" id="nom" placeholder="Nom..." className={input}  onChange={handleChange} value={formdata.nom}  required />
                        <input type="text" name="prenom" id="Prenom" placeholder="Prenom..." className={input} onChange={handleChange} value={formdata.prenom}  required />
                        <input type="text" name="formation" id="Formation" placeholder="Formation..." className={input} onChange={handleChange} value={formdata.formation} required/>
                        <label htmlFor="date_debut" className="">Date de debut :</label>
                        <input type="date" name="date_de_debut" id="date_debut" placeholder="date..." className={input} onChange={handleChange} value={formdata.date_de_debut}  required />
                        <label htmlFor="date_fin" className="">Date de fin : </label> 
                        <input type="date" name="date_de_fin" id="date_fin" placeholder="date..."  className={input} onChange={handleChange} value={formdata.date_de_fin}  required />
                        <div className="my-4">
                            <button className={button}>Enregistrer</button>
                        </div>
                        <div>
                            <a className="flex justify-center text-xl hover:cursor-pointer">Voir les stagiaires </a> <br />
                        </div>
                    </div>
                </form>
            </div>
    </>
}