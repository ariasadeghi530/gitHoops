

//search bar redirect
let searchVal = localStorage.getItem('search') || '';

document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);


  if (!(nbaTeamNames.includes(searchVal)) && (currentPlayers.includes(searchVal))) {

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
    .then(({ player }) => {

      document.getElementById('playerPhoto').innerHTML = `
            <img class="playerCardImg" src="${player[0].strCutout}">
        `
      document.getElementById('team').innerHTML = `
            <strong>Team: </strong>${player[0].strTeam}
        `
      document.getElementById('birthday').innerHTML = `
            <strong>Birthday: </strong>${player[0].dateBorn}
        `
      document.getElementById('hometown').innerHTML = `
            <strong>Hometown: </strong>${player[0].strBirthLocation}
        `
      document.getElementById('height').innerHTML = `
            <strong>Height: </strong>${player[0].strHeight}
        `
      document.getElementById('weight').innerHTML = `
            <strong>Weight: </strong>${player[0].strWeight}
        `
      document.getElementById('playerName').innerHTML = `
            <h2>${player[0].strPlayer}<h2>
        `
      document.getElementById('bio').innerHTML = `
            ${player[0].strDescriptionEN}
        `
    })
    .catch(e => console.error(e));
}


let search = (localStorage.getItem('search')).split(" ");

searchPlayer(search[0], search[1]);

//for mobile navbar drop
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, 'left');
});