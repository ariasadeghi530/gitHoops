let currentPlayers = JSON.parse(localStorage.getItem('players')) || [];

let nbaTeams = JSON.parse(localStorage.getItem('nbaTeams'));


// ajax request to populate players array
for (let k = 0; k < nbaTeams.length; k += 2) {
  let teamName = nbaTeams[k].split(' ').join('%20');
  
fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`)
  .then(r => r.json())
  .then(({player}) => {
    for(let j = 0; j < player.length; j++){
      currentPlayers.push(((player[j].strPlayer).toLowerCase()).trim());
    }
    
    if(currentPlayers.length > 551){
      return;
    }
    
    localStorage.setItem('players', JSON.stringify(currentPlayers));
  })

  .catch(e => console.error(e));
}
