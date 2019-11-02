import React from 'react';
import SelectCities from './components/select_cities/select-cities.component';
import Showairports from './components/show_airports/show_airports.component';

class App extends React.Component{
   constructor(props){
     super(props)
     this.state = {
       airports : []
     }
   }

   handleChange = (e) => {
        let city = e.target.value;
        if(city.includes("%20")) city = city.replace(/%20/g," ")
        fetch(`http://localhost:8000/airports/${city}`)
            .then(res=>res.json())
            .then(result => this.setState({airports:result}))
   }

  render(){
    const { airports }  = this.state
    console.log(airports)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark shadow">
        <span className="navbar-brand mb-0 h1">Interview Ready Test</span>
      </nav>
      
      <SelectCities handleChange={this.handleChange}/>
      <div className="container text-center">
      {
        airports.length?airports.map((item,i)=><Showairports key={i*100}
                                                  iata={item.IATA_code} 
                                                  icao={item.ICAO_code} 
                                                  name={item.airport_name}/>
        ):<h1 className="display-1">Select Cities</h1>
      }
      </div>
    </div>
  );
  }
}

export default App;
