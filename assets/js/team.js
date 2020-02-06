

let searchVal = localStorage.getItem('search') || '';



document.getElementById('searchBtn').addEventListener("click", event => {
  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal)) && (currentPlayers.includes(searchVal))) {
    let splitName = searchVal.split(" ");

    localStorage.setItem('player', splitName);
   
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

// Code that works----------------
fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${search}`)
.then(r => r.json())
.then(({player}) => {
  console.log(player)
  document.getElementById('player0').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <a href="#" id="${player[0].strPlayer}"><img src="${player[0].strThumb}"></a>
        </div><!--card-image-->
          <span class="card-title">${player[0].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player1').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[1].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[1].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player2').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[2].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[2].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player3').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[3].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[3].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player4').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[4].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[4].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player5').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[5].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[5].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player6').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[6].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[6].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player7').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[7].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[7].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player8').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[8].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[8].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player9').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[9].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[9].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player10').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[10].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[10].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player11').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[11].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[11].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player12').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[12].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[12].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player13').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[13].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[13].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
  document.getElementById('player14').innerHTML = `
      <div class="card blue-grey darken-1 center white-text">
        <div class="card-image">
          <img src="${player[14].strThumb}">
        </div><!--card-image-->
          <span class="card-title">${player[14].strPlayer}</span>
      </div><!--card blue-grey darken-1 center white-text-->
  `
})


//event listener
document.getElementById('playerContainer').addEventListener('click', event => {
  console.log(event.target.id);
  localStorage.setItem('search', (event.target.id).toLowerCase())
})