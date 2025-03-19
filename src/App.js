
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const medicalTeam=[
    {"id":1,"names":"Skylar Calzoni","photo":"Images/React.png","title":"nurse","address":"Manchester"},
    {"id":2,"names":"Alfredo Gouse","photo":"Images/JS.png","title":"nurse","address":"Wartford"},
    {"id":3,"names":"James Carder","photo":"Images/TS.png","title":"nurse","address":"Milton Keynes"},
  ];

    const [teamCount,setTeamCount]=useState(0);

    useEffect(() => {// Simulate onLoad for medicalTeam count
      setTimeout(() => {
        setTeamCount(medicalTeam.length);
      }, 2000);
    });
    

  return (
    <div className="App p-3 text-center">
      
        <div className="card app-card" >
          <div className="card-header d-flex justify-content-between">
            <div>Put Forward <span className="badge badge-format">{teamCount}</span></div>
            <button type="button" class="btn btn-sm" style={{"font-weight":"bold"}}>+</button>
          </div>
          <div className="card-body text-center">
              {
                medicalTeam && medicalTeam.map((member)=>(
                  <div key={member.id} className="card col-12 p-1 m-2" style={{"height":"130px","backgroundColor":"rgb(255,255,255)"}}>
                    <div className="row m-2" style={{"height":"100px"}}>
                        <img className='col-2 rounded-circle'  src={member.photo} alt='...' />
                        <div className='col-10'  >
                            <h3 style={{"text-align":"left"}}>{member.names}</h3>
                            <div style={{"text-align":"left"}}>{member.title},{member.address}</div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="button" class="p-2 btn  btn-sm">C</button>
                        <button type="button" class="p-2 btn  btn-sm">Y</button>
                        <div className="flex-grow-1"></div>
                        <button type="button" class="p-2 btn  btn-sm">...</button>

                    </div>                
                  </div>
                  )) 
               }
            </div>
        </div>
      
      </div>
  );
}

export default App;
