import React, { Component } from 'react';

class Weather extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        items:[]
      };
    }

componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=e1522e4dd8a16d7ada4bd39f22c57e4b&units=metric")
    .then (res => res.json())
    .then (parsedJSON => parsedJSON.list.map(data => (
        {
            dateTime : `${data.dt_txt}`,
            tempX : `${data.main.temp}`,
            tempMin : `${data.main.temp_min}`,
            tempMax : `${data.main.temp_max}`,
            weather : `${data.weather[0].main}`,
        }
    )))
    .then (items => this.setState({
        items,
        isLoaded : false
    }))
    .catch(error => console.log('parsing failed', error))
}

 render (){
     const {items} = this.state;
     return (
      <div className="container">
        <h1>Prakiraan Cuaca Yogyakarta</h1>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date time</th>
              <th scope="col">Temp</th>
              <th scope="col">Temp Min</th>
              <th scope="col">Temp Max</th>
              <th scope="col">Weather</th>
            </tr>
          </thead>
          <tbody>
        {
          items.length > 0 ? items.map(item => {
                  const {dateTime, tempX,tempMin,tempMax, weather} = item;
                  return (                 
                        <tr>
                          <th>{dateTime}</th>
                          <td>{tempX}</td>
                          <td>{tempMin}</td>
                          <td>{tempMax}</td>
                          <td>{weather}</td>
                        </tr>
                    );
                }) : null
            }
            </tbody>
        </table>
     </div>
     );
 }
} 

export default Weather;