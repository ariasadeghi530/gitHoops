fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=1')
    .then(r => r.json())
    .then(({teams}) => {
        console.log(teams)
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
    })