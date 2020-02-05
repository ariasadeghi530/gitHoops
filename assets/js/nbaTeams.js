//array containing names of all the teams
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