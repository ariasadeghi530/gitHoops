//for mobile navbar drop
$(document).ready(function () {
  $('.sidenav').sidenav();


});
$(."search-trigger").click(function() {
  $(#"search").search();
  
})











// fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=')
//     .then(r => r.json())
//     .then(({teams}) => {
//         console.log(teams[0])
//         document.getElementById('teamPhoto').innerHTML = `
//             <img src="${teams[0].strTeamBadge}">
//         `
//         document.getElementById('teamName').innerHTML = `
//             ${teams[0].strTeam}
//         `
//         document.getElementById('sport').innerHTML = `
//         <strong>Sport: </strong>${teams[0].strSport}
//         `
//         document.getElementById('league').innerHTML = `
//         <strong>League: </strong>${teams[0].strLeague}
//         `
//         document.getElementById('stadium').innerHTML = `
//         <strong>Stadium: </strong>${teams[0].strStadium} (${teams[0].strStadiumLocation})
//         `
//         document.getElementById('website').innerHTML = `
//         <strong>Website: </strong>${teams[0].strWebsite}
//         `
//         document.getElementById('bio').innerHTML = `
//         ${teams[0].strDescriptionEN}
//         `        
//     })
//     .catch(e => console.log(e))

    

// document.getElementById('playerPhoto').innerHTML = 


// fetch(`http://www.omdbapi.com/?t=${document.getElementById('title').value}&apikey=trilogy`)
//         .then(r => r.json())
//         .then(({ Title, Year, Director, Poster, Plot }) => {
//           movie = {
//             title: Title,
//             year: Year,
//             director: Director,
//             plot: Plot
//           }
//           document.getElementById('movie').innerHTML = `
//           <div class="card">
//             <div class="card-image">
//               <img src="${Poster}" alt="${Title}">
//               <span class="card-title">${Title}</span>
//             </div>
//             <div class="card-content">
//               <h4>Directed by ${Director}</h4>
//               <h5>Year: ${Year}</h5>
//               <p>${Plot}</p>
//             </div>
//             <div class="card-action">
//               <button class="btn waves-effect waves-light addWatchlist">Add To Watchlist</button>
//             </div>
//           </div>
//         `
//         document.getElementById('title').value = ''
//         })
//         .catch(e => console.error(e))

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






