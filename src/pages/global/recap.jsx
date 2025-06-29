export function Recapitulatif(){
    return<>
         <table className='border-1 text-center w-[80%] mx-auto my-50'>
        <caption   style={{padding:"17px"}} >Stagiaire</caption>
        <thead>
          <tr>
            <td colSpan="7" style={{padding:"10px"}} className='bg-gray-200'>Developement logiciel</td>
          </tr>
          <tr className='border-1'>
            <th className='border-1'>Nom</th>
            <th className='border-1'>Prenom</th>
            <th className='border-1'>Date de debut</th>
            <th className='border-1'>Date de fin</th>
            <th className='border-1'>Present</th>
            <th className='border-1'>Absent(e)</th>
            <th className='border-1'>Nombre d'heure effectuées</th>
          </tr>
          <tr>
            <td className='border-1'>HIRWA</td>
            <td className='border-1'>JEAN</td>
            <td className='border-1'>01/06/2025</td>
            <td className='border-1'>01/09/2025</td>
            <td className='border-1'>2</td>
            <td className='border-1'>3</td>
            <td className='border-1'>10 heures effectuées</td>
          </tr>
          <tr>
            <td className='border-1'>FOKOU</td>
            <td className='border-1'>Christelle</td>
            <td className='border-1'>01/06/2025</td>
            <td className='border-1'>01/09/2025</td>
            <td className='border-1'>4</td>
            <td className='border-1'>1</td>
            <td className='border-1'>32 heures effectuées</td>
          </tr>
          <tr>
            <td colSpan="7" style={{padding:"10px", margin:"10px"}} className='bg-gray-200'>Marketing Digital</td>
          </tr>
           <tr>
            <td className='border-1'>ATANGANA</td>
            <td className='border-1'>Solange</td>
            <td className='border-1'>01/06/2025</td>
            <td className='border-1'>01/09/2025</td>
            <td className='border-1'>4</td>
            <td className='border-1'>1</td>
            <td className='border-1'>35 heures effectuées</td>
          </tr>
          <tr>
            <td className='border-1'>BATAMA</td>
            <td className='border-1'>Gregoire</td>
            <td className='border-1'>01/06/2025</td>
            <td className='border-1'>01/09/2025</td>
            <td className='border-1'>4</td>
            <td className='border-1'>1</td>
            <td className='border-1'>35 heures effectuées</td>
          </tr>

        </thead>
      </table>
    </>
}