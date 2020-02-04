fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
    .then(r => r.json())
    .then(({teams}) => {
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
        <strong>Website: </strong><a target="_blank" href="https://${teams[0].strWebsite}">${teams[0].strWebsite}</a>
        `
        document.getElementById('bio').innerHTML = `
        ${teams[0].strDescriptionEN}
        `        
    })
    .catch(e => console.log(e))


// document.getElementById('playerPhoto').innerHTML = 

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
