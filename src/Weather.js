import React, { Component } from 'react';

class Weather extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        items:[]
      };
    }

componentDidMount() {
    fetch("http://10.33.34.227/response.json")
    .then (res => res.json())
    .then (parsedJSON => parsedJSON.list.map(data => (
        {
            dateTime : `${data.dt_txt}`,
            tempX : `${data.main.temp}`,
            tempMin : `${data.main.temp_min}`,
            tempMax : `${data.main.temp_max}`,
            weather : `${data.weather.main}`,
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
         <div className="boxWhite">
            {
                items.length > 0 ? items.map(item => {
                    const {dateTime, tempX,tempMin,tempMax, weather} = item;
                    return (
                        
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  </head>
  <body>
    <h1>Prakiraan Cuaca Yogyakarta</h1>
	<div class="container">
	<table class="table">
	  <thead>
		<tr>
		  <th scope="col">dateTime</th>
		  <th scope="col">Temp</th>
          <th scope="col">Temp Min</th>
          <th scope="col">Temp Max</th>
          <th scope="col">Weather</th>
		</tr>
	  </thead>
	  <tbody>
			<?php foreach ($result as $r){
				echo '	
				
					<tr>

					  <td>'.$r->nama.'</td>
            <td>'.$r->nim.'</td>

					</tr>
			  ';
			}
			?>
	  </tbody>
	</table>
	</div>
                        <div key={dateTime} className="bgCircle">
                            <center><img src={thumbnail} alt={firstName} className="circle"/>
                            </center><br />
                            <div className="ctr">
                                {firstName} {lastName}<br />
                                {location}
                            </div>
                        </div>
                    );
                }) : null
            }
         </div>
     );
 }
}

export default Weather;