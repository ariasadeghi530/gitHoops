const apiKey = 'AIzaSyCbOrVjet_s1nbRMEgLVNsx0reP9G6Ju6g';

let searchVal = localStorage.getItem('search') || '';

let latit = JSON.parse(localStorage.getItem('lat'));
let long = JSON.parse(localStorage.getItem('lon'));

let map, marker, stadium;


document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal)) && (currentPlayers.includes(searchVal))) {
    let splitName = searchVal.split(" ");

    localStorage.setItem('player', splitName);

    window.location.replace('./player.html');
  } else {
    // if team name doesn't include city, go back to previous index with city
    if (!((nbaTeamNames.indexOf(searchVal)) % 2 === 0)) {
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
      console.log(teams[0].strStadium)
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
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${teams[0].strStadium}&key=${apiKey}`)
        .then(r => r.json())
        .then(({ results }) => {
          console.log(results[0].geometry.location);

          latit = results[0].geometry.location.lat;
          console.log(latit);
          localStorage.setItem('lat', latit);
          long = results[0].geometry.location.lng
          console.log(long)
          localStorage.setItem('lon', long)

          stadium = { lat: latit, lng: long };
          map = new google.maps.Map(
            document.getElementById('map'), { zoom: 16, center: stadium });

          // The marker, positioned at stadium
          marker = new google.maps.Marker({ position: stadium, map });

        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e));
}

function initMap() {

  // The location of stadium

}


let search = localStorage.getItem('search')
searchTeam(search);