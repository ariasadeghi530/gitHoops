

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
        // window.location.replace('./team.html');
    }
    document.getElementById('searchBar').value = '';
})

//list all the teams badges on page
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
    .then(r => r.json())
    // .then(res => console.log(res))
    .then(({ teams }) => {
        for (let i = 0; i < teams.length; i++) {
            document.getElementById(`teamPhoto${i + 1}`).innerHTML = `
            <a href="./team.html"><img src="${teams[i].strTeamBadge}" id="${teams[i].strTeam}"></a>
        `
            document.getElementById(`teamName${i + 1}`).innerHTML = `
            ${teams[i].strTeam}
        `
        }
    })

//clicking on team image redirects to team page
document.getElementById('teamList').addEventListener('click', event => {
    localStorage.setItem('search', event.target.id);
})
