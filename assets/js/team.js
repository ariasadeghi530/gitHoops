
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


let searchVal = localStorage.getItem('search') || '';



document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal))) {
    let splitName = searchVal.split(" ");
    localStorage.setItem('name', splitName);
    searchPlayer(splitName[0], splitName[1]);
    window.location.replace('./player.html');
  } else {
    searchTeam(searchVal);
  }
  document.getElementById('searchBar').value = '';
})


function searchTeam(str) {
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + str)
    .then(r => r.json())
    .then(({ teams }) => {
      console.log(teams[0])
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
      document.getElementById('stadium').innerHTML = `
        <strong>Stadium: </strong>${teams[0].strStadium} (${teams[0].strStadiumLocation})
        `
      document.getElementById('website').innerHTML = `
        <strong>Website: </strong>${teams[0].strWebsite}
        `
      document.getElementById('bio').innerHTML = `
        ${teams[0].strDescriptionEN}
        `
    })
    .catch(e => console.error(e));
}

let search = localStorage.getItem('search')
searchTeam(search);