
import data from "./data.json";
import React, { useState } from 'react';
import './edition.css';
 
// import initialData from './data/utilisateurs.json';

const Edition = () => {
  
  const [utilisateurs, setUtilisateurs] = useState(data);
  const [items , setItems]= useState(["nom", "prenom", "formation"]);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    formation: '', 
    dateDebut:"",
    dateFin:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ajouterUtilisateur = (e) => {
    e.preventDefault();
    const nouvelUtilisateur = { ...formData, presences: [] };
    setUtilisateurs([...utilisateurs, nouvelUtilisateur]);
    setFormData({ nom: '', prenom: '', formation: '' ,dateDebut: "", dateFin:""}); // Réinitialise
  };

         const suppression = (index) => {
         setUtilisateurs (utilisateurs.filter( (utilisateurs) => utilisateurs.id !== index)); 
           return ;

         };


        //  modifier l'état
         const handleChangeText = (item ) => {
           const nouvelleListe = data.map(( e ) =>
           e.item === item ? { ...item, nom: nouvelleListe , prenom: nouvelleListe , Formation: nouvelleListe  } : e
    );
    setUtilisateurs (nouvelleListe)
         alert(item)
  };

  return (
    <div className="container">
      <h2 className="sujet">Ajouter un utilisateur</h2>
      <p> <form onSubmit={ajouterUtilisateur} className="sujet">
        <div className="form-group"><input name="nom" value={formData.nom}  placeholder="Nom"  onChange={handleChange} /> </div>
        <div className="form-group"><input name="prenom" value={formData.prenom}  placeholder="Prénom" onChange={handleChange} /> </div>
        <div className="form-group"><input name="Formation" value={formData.Formation} placeholder="Formation" onChange={handleChange} /> </div>
        <div className="form-group"><input type ="date" value={formData.date} placeholder="date_debut" onchange={handleChange}/> </div>
        <button type="submit" className="moi">Ajouter</button> 
        
      </form> </p>

      <h2>Liste des utilisateurs</h2>
      <ul>
        {utilisateurs.map((utilisateurs, index) => (
          <div key={index}> 
          <li> 
             {utilisateurs.nom} {utilisateurs.prenom} -{utilisateurs.Formation}
          </li>
        
          <button onClick={()=>handleChangeText(index)}>Modifier</button>
          <button onClick={() => suppression(utilisateurs.id)}>Supprimer</button>
          </div>
        ))}
      </ul>
      
    </div>
  );
};

export default Edition
