import React from "react";
import '../sass/Profile.scss'
import { Repos } from "../componentes/Repos";

const ListProfile = ({apis, repos})=>{
  
  return(
    <>
      <div className="main-top">
      <div className="logo">
        {
          apis.map((api)=>(
            <div className="logo-in" key={api.id}> 
            <img src={api.avatar_url}/>
            </div>
          ))
        }
    
      </div>
      <ul className="user-list">
        {apis.map((api) => (
          <div key={api.id} className="user-info">
            <li className="user-info-li">
            <span>Followers</span>
            <span>{api.followers}</span>
            </li>
            <li className="user-info-li">
            <span>Following</span>
            <span>{api.following}</span>
            </li>
            <li className="user-info-li">
            <span>Location</span>
            <span>{api.location}</span>
            </li>
          </div>
        ))}
    </ul>

      </div>

        <Repos repos={repos}/>

    </>
  )
}
//EN CASO DE NO TENER DATOS
const NoList = () =>{
  return(
    <p></p>
  ) 
  
}
//VERIFICAMOS SI HAY O NO HAY DATOS
const Profile = ({apis, repos}) =>{
  const hastProfile = apis?.length > 0 
  //SI HAY DATOS, RETONAMOS LA LIST, SINO NOLIST
  return hastProfile ? <ListProfile apis={apis} repos={repos}/> 
  : <NoList /> 
}
export {Profile}