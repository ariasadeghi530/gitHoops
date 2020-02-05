//array containing names of all the teams
let nbaTeamNames = [];

//populate array with all team names
fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
    .then(r => r.json())
    .then(({ teams }) => {
        teams.forEach((element, index) => {
            nbaTeamNames[index] = element.strTeam.toLowerCase();
        });

    })
    .catch(e => console.error(e));



fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=1')
    .then(r => r.json())
    .then(({teams}) => {
        
        document.getElementById('teamPhoto').innerHTML = `
            <img src="${teams[0].strTeamBadge}">
        `
        document.getElementById('teamName').innerHTML = `
            ${teams[0].strTeam}
        `
        document.getElementById('teamPhoto2').innerHTML = `
            <img src="${teams[1].strTeamBadge}">
        `
        document.getElementById('teamName2').innerHTML = `
            ${teams[1].strTeam}
        `
        document.getElementById('teamPhoto3').innerHTML = `
            <img src="${teams[2].strTeamBadge}">
        `
        document.getElementById('teamName3').innerHTML = `
            ${teams[2].strTeam}
        `
        document.getElementById('teamPhoto4').innerHTML = `
            <img src="${teams[3].strTeamBadge}">
        `
        document.getElementById('teamName4').innerHTML = `
            ${teams[3].strTeam}
        `
        document.getElementById('teamPhoto5').innerHTML = `
            <img src="${teams[4].strTeamBadge}">
        `
        document.getElementById('teamName5').innerHTML = `
            ${teams[4].strTeam}
        `
        document.getElementById('teamPhoto6').innerHTML = `
            <img src="${teams[5].strTeamBadge}">
        `
        document.getElementById('teamName6').innerHTML = `
            ${teams[5].strTeam}
        `
        document.getElementById('teamPhoto7').innerHTML = `
            <img src="${teams[6].strTeamBadge}">
        `
        document.getElementById('teamName7').innerHTML = `
            ${teams[6].strTeam}
        `
        document.getElementById('teamPhoto8').innerHTML = `
            <img src="${teams[7].strTeamBadge}">
        `
        document.getElementById('teamName8').innerHTML = `
            ${teams[7].strTeam}
        `
    })

//search bar redirect
let searchVal = localStorage.getItem('search') || '';

document.getElementById('searchBtn').addEventListener("click", event => {
    searchVal = document.getElementById("searchBar").value.toLowerCase();
    localStorage.setItem('search', searchVal);

    if (!(nbaTeamNames.includes(searchVal))) {
        //split name for ajax request
        let splitName = searchVal.split(" ");
        console.log(splitName);
        searchPlayer(splitName[0], splitName[1]);
    } else {
        window.location.replace('./team.html');
    }
    document.getElementById('searchBar').value = '';
})