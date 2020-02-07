//for mobile navbar drop
$(document).ready(function () {
  $('.sidenav').sidenav();
});


let searchVal = localStorage.getItem('search') || '';



document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal))) {
    // let splitName = searchVal.split(" ");
    // localStorage.setItem('player', splitName);
   
    window.location.replace('./player.html');
  } else {
    // if team name doesn't include city, go back to previous index with city
    if(!((nbaTeamNames.indexOf(searchVal)) % 2 === 0)){
      searchVal = nbaTeamNames[(nbaTeamNames.indexOf(searchVal) - 1)]
      localStorage.setItem('search', searchVal);
    }
    searchTeam(searchVal);
  }
  document.getElementById('searchBar').value = '';
})




function searchTeam(str) {
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + str)
    .then(r => r.json())
    .then(({ teams }) => {
      
      document.getElementById('teamPhoto').innerHTML = `
            <img src="${teams[0].strTeamBadge}">
        `
      document.getElementById('teamName').innerHTML = `
            ${teams[0].strTeam}
        `
      document.getElementById('sport').innerHTML = `
        <strong>Sport: </strong>${teams[0].strSport}
        `
      document.getElementById('league').innerHTML = `
        <strong>League: </strong>${teams[0].strLeague}
        `
      document.getElementById('website').innerHTML = `
        <strong>Website: </strong><a target="_blank" href="https://${teams[0].strWebsite}">${teams[0].strWebsite}</a>
        `
      document.getElementById('stadium').innerHTML = `
        <strong>Stadium: </strong>${teams[0].strStadium}(${teams[0].strStadiumLocation})
        `
      document.getElementById('bio').innerHTML = `
        ${teams[0].strDescriptionEN}
        `
    })
    .catch(e => console.error(e));
}

fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=los%20angeles%20lakers')
  .then(r => r.json())
  .then(({player}) => {
    for(let i = 0; i < player.length; i++){
     
    }
  })


let search = localStorage.getItem('search')
searchTeam(search);



// map


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
  });

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  // Specify just the place data fields that you need.
  autocomplete.setFields(['place_id', 'geometry', 'name']);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);

  var marker = new google.maps.Marker({ map: map });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', function () {
    infowindow.close();

    var place = autocomplete.getPlace();

    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });

    marker.setVisible(true);

    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-id'].textContent = place.place_id;
    infowindowContent.children['place-address'].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });
}
