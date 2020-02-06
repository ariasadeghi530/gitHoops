//array containing names of all the teams
let nbaTeamNames = JSON.parse(localStorage.getItem('nbaTeams')) || [];


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
    //make sure array doesn't have repitition
    if (nbaTeamNames.length > 60){
      return;
    }
    //add array to local storage to be used later
    localStorage.setItem('nbaTeams', JSON.stringify(nbaTeamNames));
  })
  .catch(e => console.error(e));


