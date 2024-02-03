//OBTENIENDO LA DATA DE API SEGUN EL USER AL BUSCAR
//BUSCAMOS POR NOMBRE: username
const getDataApi = async (username) => {
  try {
    //FETCH DE LOS DATOS DEL USER
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = await resp.json();
    console.log(data)
   
    // FETCH DE LOS REPOSITORIOS DEL USER
    const repoResp = await fetch(`https://api.github.com/users/${username}/repos`);
    const repoData = await repoResp.json();

    //RETORNAMOS AMBAS FETCH
     return { data, repoData };
   
  } catch (e) {
    console.error('Error fetching data from API:', e);
    throw new Error('error');
  }
};

export {getDataApi}
