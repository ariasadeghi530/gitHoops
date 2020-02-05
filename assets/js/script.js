


let searchVal = localStorage.getItem('search') || '';


//search bar redirect
document.getElementById('searchBtn').addEventListener("click", event => {
  
searchVal = document.getElementById("searchBar").value.toLowerCase();
localStorage.setItem('search', searchVal);

if(!(nbaTeamNames.includes(searchVal))) {
  //split name for ajax request
  // let splitName = searchVal.split(" ");
  
  // localStorage.setItem('player', splitName);
  
  window.location.replace('./player.html')
} else {
  // if team name doesn't include city, go back to previous index with city
  if (!((nbaTeamNames.indexOf(searchVal)) % 2 === 0)) {
    searchVal = nbaTeamNames[(nbaTeamNames.indexOf(searchVal) - 1)];
    localStorage.setItem('search', searchVal);
  }
  window.location.replace('./team.html');
}
document.getElementById('searchBar').value = '';
})


