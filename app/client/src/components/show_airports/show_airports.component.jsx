import React from 'react'

const Showairports=({iata,icao,name})=>{
  
    return (
        <div className="card-dark shadow">
            <div className="card-header bg-dark text-white">{iata}</div>
            <div className="card-body">{name}</div>
            <div className="card-footer bg-dark text-white">{icao}</div>
        </div>
    )
    
}

export default Showairports;
