// get search value from local storage
let searchVal = localStorage.getItem('search') || '';

//list all the teams badges on page
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
    .then(r => r.json())
    .then(({ teams }) => {
        //iteratively render teams
        for (let i = 0; i < teams.length; i++) {
            let teamDiv = document.createElement('div');
            teamDiv.classList = 'col s12 m4 l2';
            teamDiv.innerHTML = `
            <div id="teamPhoto${i + 1}">
            <a href="./team.html"><img src="${teams[i].strTeamBadge}" id="${teams[i].strTeam}"></a>
            </div>
            <h5 class="teamTitle" id="teamName${i + 1}">${teams[i].strTeam}</h5>
            `;

            if (i % 6 === 0) {
                let divRow = document.createElement('div');
                divRow.className = 'row';
                document.getElementById('teamList').append(divRow);
            }

            document.getElementById('teamList').append(teamDiv);

        }
    });


//search bar redirect
document.getElementById('searchBtn').addEventListener("click", event => {
    event.preventDefault();
    searchVal = document.getElementById("searchBar").value.toLowerCase();

    //check if anything has been typed
    if ((searchVal === '')) {
        document.getElementById('searchBar').focus();
    }
    else {
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
    }
});

//clicking on team image redirects to team page
document.getElementById('teamList').addEventListener('click', event => {
    localStorage.setItem('search', event.target.id);
});

//for mobile navbar drop
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, 'left');
});