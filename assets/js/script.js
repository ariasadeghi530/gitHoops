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

//for mobile navbar drop
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, 'left');
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {});
});





//News api articles
fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f7435c3676b34c89bdb1562b6cac0849`)
.then(r => r.json())
.then(({articles}) => {
  console.log(articles)
  document.getElementById('carouselImg0').innerHTML = `
  <img style="width: 100%;" src="${articles[0].urlToImage}">
  `
  document.getElementById('carouselContent0').innerHTML = `
  <h4>${articles[0].title}</h4>
  <p>${articles[0].description}</p>
  `
  document.getElementById('carouselImg1').innerHTML = `
  <img style="width: 100%;" src="${articles[1].urlToImage}">
  `
  document.getElementById('carouselContent1').innerHTML = `
  <h4>${articles[1].title}</h4>
  <p>${articles[1].description}</p>
  `
  document.getElementById('carouselImg2').innerHTML = `
  <img style="width: 100%;" src="${articles[2].urlToImage}">
  `
  document.getElementById('carouselContent2').innerHTML = `
  <h4>${articles[2].title}</h4>
  <p>${articles[2].description}</p>
  `
  document.getElementById('carouselImg3').innerHTML = `
  <img style="width: 100%;" src="${articles[3].urlToImage}">
  `
  document.getElementById('carouselContent3').innerHTML = `
  <h4>${articles[3].title}</h4>
  <p>${articles[3].description}</p>
  `
})

