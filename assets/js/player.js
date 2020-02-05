
//array containing names of all the teams
let nbaTeamNames = [];

//populate array with all team names
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
  .then(r => r.json())
  .then(({ teams }) => {
    teams.forEach((element, index) => {
      nbaTeamNames[index] = element.strTeam.toLowerCase();
    });

  })
  .catch(e => console.error(e));

//search bar redirect
let searchVal = localStorage.getItem('search') || '';

document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal))) {
    //split name for ajax request
    let splitName = searchVal.split(" ");
    searchPlayer(splitName[0], splitName[1]);
  } else {
    window.location.replace('./team.html');
  }
  document.getElementById('searchBar').value = '';
})


function searchPlayer(strFirst, strLast) {
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + strFirst + '%20' + strLast)
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      // EVAN: ADD JS HERE
      
    })
    .catch(e => console.error(e));
}