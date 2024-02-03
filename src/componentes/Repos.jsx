import React from "react";
import '../sass/Repos.scss'
import share from '../assets/Nesting.svg'
import star from '../assets/Star.svg'
import { useState } from "react";

const ListRepos = ({repos})=>{

  const [visibleRepos, setVisibleRepos] = useState(4);
  const handleLoadMore = () => {
    setVisibleRepos((prevVisibleRepos) => prevVisibleRepos + 4);
  };
  const handleClick =(e) => {
    window.open(e, '_blank');
  }
  return(
    <>
      <div className="main-title">
        <h2>GitHub</h2>
        <p>How people build software.</p>
      </div>
      <div className="main-body">
          <div className="card-container">
          {
            //DATOS DE LOS REPOSITORIOS
            repos.slice(0, visibleRepos).map((repo)=>(
              <div className="card" key={repo.id} onClick={()=>handleClick(repo.html_url)}>
                <h3>{repo.name.toLowerCase()}</h3>
                <p>{repo.description}</p>
                <div className="details">
                  <ul className="detail-list">
                    <li><img src={share}/>{repo.forks_count}</li>
                    <li><img src={star}/>{repo.stargazers_count}</li>
                    <li>update {repo.created_at.slice(0,10)}</li>
                  </ul>
                </div>
              </div>
            ))
          }
          </div>
          {visibleRepos < repos.length && (
            <div className="container-btn">
              <button onClick={handleLoadMore}>View all repositories</button>
            </div>
         
        )}
      </div>

    </>
  )
}
//EN CASO DE NO TENER DATOS
const NoList = () =>{
  return(
    <p className="noList">NO HAY REPOSITORIOS</p>
  ) 
  
}
//VERIFICAMOS SI HAY O NO HAY DATOS
const Repos = ({repos}) =>{
  const hastRepos = repos?.length > 0 
  //SI HAY DATOS, RETONAMOS LA LIST, SINO NOLIST
  return hastRepos ? <ListRepos repos={repos}/> 
  : <NoList /> 
}
export {Repos}