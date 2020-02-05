
//array containing names of all the teams
let nbaTeamNames = [];

//populate array with all team names
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
  .then(r => r.json())
  .then(({ teams }) => {
    teams.forEach((element) => {
      nbaTeamNames.push(element.strTeam.toLowerCase());
      let teamNameArr = element.strTeam.split(" ");
      console.log(teamNameArr);
      if (teamNameArr.length > 2) {

        nbaTeamNames.push(teamNameArr[teamNameArr.length - 1].toLowerCase())
      } else {
        nbaTeamNames.push(teamNameArr[teamNameArr.length - 1].toLowerCase())
      }

    });
    console.log(nbaTeamNames)
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
    // if team name doesn't include city, go back to previous index with city
    if (!((nbaTeamNames.indexOf(searchVal)) % 2 === 0)) {
      searchVal = nbaTeamNames[(nbaTeamNames.indexOf(searchVal) - 1)]
      localStorage.setItem('search', searchVal);
    }
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
fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=los%20angeles%20lakers')
    .then(r => r.json())
    .then(({player}) => {
        console.log(player)
        
    })

