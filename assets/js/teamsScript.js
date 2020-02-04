fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
    .then(r => r.json())
    .then(({teams}) => {
        console.log(teams[0])
        document.getElementById('teamPhoto').innerHTML = `
            <img src="${teams[0].strTeamBadge}">
        `
        document.getElementById('teamName').innerHTML = `
            ${teams[0].strTeam}
        `
    })