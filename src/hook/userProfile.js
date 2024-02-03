import { useCallback, useState, useEffect } from "react";
import { getDataApi } from "../services/profile";

const userProfile = () =>{
  //MANEJAMOS EL ESTADO DEL USER Y REPOSITORIOS
  const [dataApi, setDataApi] = useState([])
  const [repoData, setRepoData] = useState([]);
 
  const fetchData=useCallback(async(username)=>{
    try{
      //Colocamos lo obtenido.
      const { data, repoData } = await getDataApi(username);
      setDataApi(data ? [data] : []); 
      setRepoData(repoData);
      console.log(repoData)
    }catch(e){
      throw new Error('error 2')
    }
  },[])
  //Retonamos tanto la api de user como la de repost
  return {apis:dataApi, repos:repoData, fetchData}

}
export {userProfile}
