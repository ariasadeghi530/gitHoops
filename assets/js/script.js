// get search value from local storage
let searchVal = localStorage.getItem('search') || '';


//search bar redirect
document.getElementById('searchBtn').addEventListener("click", event => {

  searchVal = document.getElementById("searchBar").value.toLowerCase();
  localStorage.setItem('search', searchVal);

  //change page to player page if name is in array of players
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

//for mobile navbar drop
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, 'left');
});

// js for carousel animation
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {});
});





//News api articles
fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f7435c3676b34c89bdb1562b6cac0849`)
  .then(r => r.json())
  .then(({ articles }) => {
  })

//espn api for nba related articles
fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`)
  .then(r => r.json())
  .then(({ articles }) => {
    console.log(articles);
    for (let i = 0; i < 6; i++) {
      
      document.getElementById(`carouselImg${i}`).innerHTML = `
  <img style="width: 100%; height: 275px;" src="${articles[i].images[0].url}" alt="${articles[i].images[0].caption}">
  `
      document.getElementById(`carouselContent${i}`).innerHTML = `
  <h4>${articles[i].headline}</h4>
  <p>${articles[i].description}</p>
  `
    }
  })
  .catch(e => console.error(e));


