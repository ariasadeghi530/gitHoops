let currentPlayers = [];

console.log(nbaTeamNames[8]);

// ajax request to populate players array
for (let i = 0; i < nbaTeamNames.length; i += 2) {
  let teamName = nbaTeamNames[i].split(" ").join("%20");
  console.log(teamName);
fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`)
  .then(r => r.json())
  .then(({player}) => {
    for(let j = 0; j < player.length; j++){
      currentPlayers.push(player[j].strPlayer);
    }
    
  })
}
console.log(currentPlayers);