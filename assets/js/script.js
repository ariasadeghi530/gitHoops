//array containing names of all the teams
let nbaTeamNames = [];

//populate array with all team names
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
.then(r => r.json())
.then(({teams}) => {
  teams.forEach((element, index) => {
    nbaTeamNames[index] = element.strTeam.toLowerCase();
  });
 
})
.catch(e => console.error(e));


document.getElementById('searchBtn').addEventListener("click", event => {
let searchVal = document.getElementById("searchBar").value.toLowerCase();
if(!(nbaTeamNames.includes(searchVal))) {
  //split name for ajax request
  let splitName = searchVal.split(" ");
  console.log(splitName);
  searchPlayer(splitName[0], splitName[1]);
} else {
  searchTeam(searchVal);
}
document.getElementById('searchBar').value = '';
})

function searchTeam(str){
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + str)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch(e => console.error(e));
}

function searchPlayer(strFirst, strLast){
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + strFirst + '%20' + strLast)
    .then(r => r.json())
    .then((data) => {
     console.log(data)
    })
    .catch(e => console.error(e));
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 33.6846, lng: -117.8265 },
    zoom: 8
  });
}
