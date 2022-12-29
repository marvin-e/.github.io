const trainStops = [
    [ -74.062807604577102, 40.731887886706289 ], // Journal Square
    [ -74.04265046986545, 40.719447431329904 ], // Grove Street
    [ -74.034686801328462, 40.726975147371647 ], // Newport
    [ -74.006213685431518, 40.733098943346342 ], // Christopher Street
    [ -73.999437285880916, 40.734419302898964 ], // 9th Street Station
    [ -73.996897332241559, 40.737326949235126 ], // 14th Street Station
    [ -73.992882799504031, 40.742854035442704 ], // 23rd Street Station
    [ -73.987991892611831, 40.749550318804175 ], // 33rd Street Station
    ]
    
    // Using public access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFydjIxMiIsImEiOiJjbGJsbTJ2MGwwOG81M3ZteGkxNjEwMGt1In0.odGxrvgHkV_k1MivbUs3Kw';
    
    // This is the map instance
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -74.032292865624896, 40.716789497005166 ],
      zoom: 11,
    });
    
    // Added a Thomas the Tank Engine as the marker
    var image = new Image();
    image.src = './thomas.png';
    
    image.width = 50;
    image.height = 50;
    
    let marker = new mapboxgl.Marker(image).setLngLat([-71.093729, 42.359244]).addTo(map);
    
    // counter here represents the index of the current bus stop
    
    let counter = 0;
    function move() {
      setTimeout(() => {
        if(counter >= trainStops.length) {
          return;
        }
        marker.setLngLat(trainStops[counter]);
        counter++;
        move();
      }, 1000);
    }
