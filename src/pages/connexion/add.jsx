import { useState } from "react";
import  data  from "./data.json";




export function Add(){
     const input =" border-2 border-blue-900 border-gray-300 w-full p-2 rounded-lg mb-4 hover:border-blue-500 focus:border-blue-500";
     const button ="w-[90%] bg-blue-600 rounded-2xl text-white flex justify-center py-2 m-auto  hover:cursor-pointer hover:bg-blue-900 "

     const [formdata,setFormdata]=useState({
        id:"",
        nom:"",
        prenom:"",
        formation:"",
        date_de_debut:"",
        date_de_fin:"",
        presence:""
     })

     const handleSubmit=(e)=>{
        e.preventDefault()
        const {value}=e.target
     }

     console.log(formdata)

    return <>
            <div className="flex items-center justify-center min-h-screen bg-gray-300">
                <form action="" method="post" className=" backdrop-blur-xl bg-white/90 p-10 rounded-lg shadow-2xl w-140 flex items-center justify-center flex-col ">
                    <h1 align="center" className="mb-10 flex flex-col items-center text-2xl font-bold">Ajouter des stagiaires</h1>
                    <div className="flex flex-col w-full">
                        <input type="text" name="nom" id="nom" placeholder="Nom..." className={input}  required />
                        <input type="text" name="Prenom" id="Prenom" placeholder="Prenom..." className={input} required />
                        <input type="text" name="Formation" id="Formation" placeholder="Formation..." className={input} required/>
                        <label htmlFor="date_debut" className="my-2">Date de debut :</label>
                        <input type="date" name="date" id="date_debut" placeholder="date..." className={input} required />
                        <label htmlFor="date_fin" className="my-2">Date de fin : </label> 
                        <input type="date" name="date" id="date_fin" placeholder="date..."  className={input} required />
                        <div className="my-4">
                            <button className={button}>Enregistrer</button>
                        </div>
                        <div>
                            <a className="flex justify-center decoration-wavy text-xl hover:cursor-pointer">Passer</a>
                        </div>
                    </div>
                </form>
            </div>
    </>
}