
// key for Google maps
const apiKey = 'AIzaSyCbOrVjet_s1nbRMEgLVNsx0reP9G6Ju6g';

//for navbar search
let searchVal = localStorage.getItem('search') || '';

let latit = JSON.parse(localStorage.getItem('lat'));
let long = JSON.parse(localStorage.getItem('lon'));

//render when redirected
let search = localStorage.getItem('search')



// capitalize first letters of team names for AJAX request
let capSearch = toUpper(search);


function initMap() {
}
//capitalize first letters of strings
function toUpper(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

//render team with info and map of stadium
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
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${teams[0].strStadium}&key=${apiKey}`)
        .then(r => r.json())
        .then(({ results }) => {


          latit = results[0].geometry.location.lat;
          localStorage.setItem('lat', latit);
          long = results[0].geometry.location.lng
          localStorage.setItem('lon', long)

          let stadium = { lat: latit, lng: long };
          let map = new google.maps.Map(
            document.getElementById('map'), { zoom: 16, center: stadium });

          // The marker, positioned at stadium
          let marker = new google.maps.Marker({ position: stadium, map });

        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e));
}

searchTeam(search);

//render roster on load
fetch(url, {
  method: 'GET',
  headers: headers,
})
  .then(r => r.json())
  .then(({ activeplayers }) => {

    for (let i = 0; i < activeplayers.playerentry.length; i++) {

      if (activeplayers.playerentry[i].hasOwnProperty('team')) {

        if ((activeplayers.playerentry[i].team.City) + ' ' + (activeplayers.playerentry[i].team.Name) === capSearch) {

          let playerName = activeplayers.playerentry[i].player.FirstName + ' ' + activeplayers.playerentry[i].player.LastName;
          let playerImg = activeplayers.playerentry[i].player.officialImageSrc;

          let playerCardDiv = document.createElement('div');
          playerCardDiv.classList = "col s6 m4"
          playerCardDiv.innerHTML = `
      <div class="card grey lighten-4 center black-text">
        <div class="card-image">
          <a href="./player.html"><img src="${playerImg}" alt="roster-image-not-found" id="${playerName}"></a>
        </div><!--card-image-->
          <span class="card-title">${playerName}</span>
      </div><!--card grey lighten-4 center black-text-->
       `
          document.getElementById('playerCards').append(playerCardDiv);

        }
      }
    }
  })

// search bar event listener
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


//event listener
document.getElementById('playerCards').addEventListener('click', event => {

  localStorage.setItem('search', (event.target.id).toLowerCase())
})

//for mobile navbar drop
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, 'left');
});