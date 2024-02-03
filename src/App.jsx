import React, { useState, useEffect } from 'react';
import './sass/App.scss'
import { userProfile } from './hook/userProfile';
import { Profile } from './componentes/Profile';
import search from './assets/Search.svg'

function App() {
  //Manejamos la busqueda
  const [username, setUsername] = useState('');
  const {apis, repos, fetchData} = userProfile();

  useEffect(() => {
    // Función para cargar datos al inicio
    const loadInitialData = async () => {
      const initialUsername = 'RoqueZ12'; // Reemplaza con el nombre de usuario que deseas cargar al inicio.
      await fetchData(initialUsername);
    };

    // Llamamos a la función al cargar la aplicación
    loadInitialData();
  }, [fetchData]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Dividir el nombre de usuario en palabras y eliminar espacios adicionales
    const usernames = username.split(' ').map(name => name.trim()).filter(name => name !== '');

    // Realizar la búsqueda para cada nombre de usuario
    for (const name of usernames) {
      await fetchData(name);
    }
  };
  return (
    <div>
      <div className='search-container'>
        <form className='search-container-form' onSubmit={handleSearch}>
        <button className='search-container-btn' type='submit'>
            {<img src={search} alt='Search' />}
          </button>
          <input
          className='search-container-input'
          value={username}
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          />
          
        </form>
    </div>
    <main>
      <Profile apis={apis} repos={repos}/>
    </main>
   
    </div>
   
     
  );
}

export default App
