
let nbaTeamNames = [];


//populate array with all team names
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
  .then(r => r.json())
  .then(({ teams }) => {
    teams.forEach((element) => {
      nbaTeamNames.push(element.strTeam.toLowerCase());
      let teamNameArr = element.strTeam.split(" ");
      
      if (teamNameArr.length > 2) {

        nbaTeamNames.push(teamNameArr[teamNameArr.length - 1].toLowerCase())
      } else {
        nbaTeamNames.push(teamNameArr[teamNameArr.length - 1].toLowerCase())
      }

    });
    
  })
  .catch(e => console.error(e));


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
      console.log(teams)
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

let search = localStorage.getItem('search')
searchTeam(search);