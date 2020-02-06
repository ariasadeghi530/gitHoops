
let searchVal = localStorage.getItem('search') || '';


//search bar redirect
document.getElementById('searchBtn').addEventListener("click", event => {

  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  if (!(nbaTeamNames.includes(searchVal)) && (currentPlayers.includes(searchVal))) {
    //split name for ajax request
    let splitName = searchVal.split(" ");

    localStorage.setItem('player', splitName);

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


fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387')
  .then(r => r.json())
  .then(({ events }) => {
    console.log(events)
    document.getElementById('games').innerHTML = '';
    for (let i = 0; i < events.length; i++) {
      let imgBanner = events[i].strThumb;
      let localTime = events[i].strTimeLocal;
      let gameDiv = document.createElement('div');
      if (localTime ===  null || "") {
        localTime = " ";
      }
      if (imgBanner === null) {
        imgBanner = './assets/images/nbaLogo.png';
      }
      gameDiv.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
          <img class="gameImage" src="${imgBanner}">
          <span class="card-title timeZone">${localTime}</span>
            </div><!--card image-->
            <div class="card-content">
            <p>${events[i].strEventAlternate}</p>
          </div><!--card content-->
        </div><!--card-->
      </div><!--col s12 m4-->
      `
      if (i % 3 === 0) {
        let row = document.createElement('div');
        row.className = 'row'
        document.getElementById('games').append(row);
      }
      document.getElementById('games').append(gameDiv);
    }


  })
  .catch(e => console.error(e));

