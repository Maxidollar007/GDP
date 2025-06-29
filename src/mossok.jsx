import React, { useState } from "react";


const Formulaire = () => {

//   initialisation de l'objet qui va contenir les valeurs de chaque champs formData
// setFormData fonction qui permet de mettre a jour ces donnees
    const [formData, setFormData] = useState ({
        id:"",
        nom: "",
        prenom:"",
        formation:"",
        dateDebut:"",
        dateFin:""
        /* heureArrive:"",
        heureDepart:"",
        statut:"", */
    });
// permet de mettre a jour la bonne cle dans le formData
    const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value
    });
  };

//  affiche les donnees dans la console   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    // Tu peux envoyer formData à ton backend ici
  };

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <h2>gestion des utilisateurs </h2>

      {["id", "nom", "prenom", "formation"].map((field) => (
        <div key={field} className="formulaire">
          <label>{field.toUpperCase()} :</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}

      <div className="form-group">
        <label>Date de début :</label>
        <input
          type="date"
          name="dateDebut"
          value={formData.dateDebut}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Date de fin :</label>
        <input
          type="date"
          name="dateFin"
          value={formData.dateFin}
          onChange={handleChange}
        />
      </div>

      <h3>Présence</h3>

      <div className="form-group">
        <label>heure d'arrivée :</label>
        <input
          type="heure"
          name="heureArrivee"
          value={formData.dateArrivee}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>heure départ :</label>
        <input
          type="heure"
          name="heureDepart"
          value={formData.dateDepart}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Statut presence :</label>
        <div>
          <label>
            <input
              type="radio"
              name="statut"
              value="true"
              checked={formData.statut === true}
              onChange={handleChange}
            />
            True
          </label>
          
          <label>
            <input
              type="radio"
              name="statut"
              value="false"
              checked={formData.statut === false}
              onChange={handleChange}
            />
            False
          </label>
        </div>
      </div>

      <button type="submit" className='submit-button'>Envoyer</button>
    </form>
  );
};

export default Formulaire