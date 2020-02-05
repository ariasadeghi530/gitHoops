fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba')
    .then(r => r.json())
    .then(({teams}) => {
        console.log(teams)
        document.getElementById('teamPhoto').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[0].strTeamBadge}"></a>
        `
        document.getElementById('teamName').innerHTML = `
            ${teams[0].strTeam}
        `
        document.getElementById('teamPhoto2').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[1].strTeamBadge}"></a>
        `
        document.getElementById('teamName2').innerHTML = `
            ${teams[1].strTeam}
        `
        document.getElementById('teamPhoto3').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[2].strTeamBadge}"></a>
        `
        document.getElementById('teamName3').innerHTML = `
            ${teams[2].strTeam}
        `
        document.getElementById('teamPhoto4').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[3].strTeamBadge}"></a>
        `
        document.getElementById('teamName4').innerHTML = `
            ${teams[3].strTeam}
        `
        document.getElementById('teamPhoto5').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[4].strTeamBadge}"></a>
        `
        document.getElementById('teamName5').innerHTML = `
            ${teams[4].strTeam}
        `
        document.getElementById('teamPhoto6').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[5].strTeamBadge}"></a>
        `
        document.getElementById('teamName6').innerHTML = `
            ${teams[5].strTeam}
        `
        document.getElementById('teamPhoto7').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[6].strTeamBadge}"></a>
        `
        document.getElementById('teamName7').innerHTML = `
            ${teams[6].strTeam}
        `
        document.getElementById('teamPhoto8').innerHTML = `
            <a target="_blank" href="./team.html"><img src="${teams[7].strTeamBadge}"></a>
        `
        document.getElementById('teamName8').innerHTML = `
            ${teams[7].strTeam}
        `
        document.getElementById('teamPhoto9').innerHTML = `
            <a href="./team.html"><img src="${teams[8].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto10').innerHTML = `
            <a href="./team.html"><img src="${teams[9].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto11').innerHTML = `
            <a href="./team.html"><img src="${teams[10].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto12').innerHTML = `
            <a href="./team.html"><img src="${teams[11].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto13').innerHTML = `
            <a href="./team.html"><img src="${teams[12].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto14').innerHTML = `
            <a href="./team.html"><img src="${teams[13].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto15').innerHTML = `
            <a href="./team.html"><img src="${teams[14].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto16').innerHTML = `
            <a href="./team.html"><img src="${teams[15].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto17').innerHTML = `
            <a href="./team.html"><img src="${teams[16].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto18').innerHTML = `
            <a href="./team.html"><img src="${teams[17].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto19').innerHTML = `
            <a href="./team.html"><img src="${teams[18].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto20').innerHTML = `
            <a href="./team.html"><img src="${teams[19].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto21').innerHTML = `
            <a href="./team.html"><img src="${teams[20].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto22').innerHTML = `
            <a href="./team.html"><img src="${teams[21].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto23').innerHTML = `
            <a href="./team.html"><img src="${teams[22].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto24').innerHTML = `
            <a href="./team.html"><img src="${teams[23].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto25').innerHTML = `
            <a href="./team.html"><img src="${teams[24].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto26').innerHTML = `
            <a href="./team.html"><img src="${teams[25].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto27').innerHTML = `
            <a href="./team.html"><img src="${teams[26].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto28').innerHTML = `
            <a href="./team.html"><img src="${teams[27].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto29').innerHTML = `
            <a href="./team.html"><img src="${teams[28].strTeamBadge}"></a>
        `
        document.getElementById('teamPhoto30').innerHTML = `
            <a href="./team.html"><img src="${teams[29].strTeamBadge}"></a>
        `
        document.getElementById('teamName9').innerHTML = `
            ${teams[8].strTeam}
        `
        document.getElementById('teamName10').innerHTML = `
            ${teams[9].strTeam}
        `
        document.getElementById('teamName11').innerHTML = `
            ${teams[10].strTeam}
        `
        document.getElementById('teamName12').innerHTML = `
            ${teams[11].strTeam}
        `
        document.getElementById('teamName13').innerHTML = `
            ${teams[12].strTeam}
        `
        document.getElementById('teamName14').innerHTML = `
            ${teams[13].strTeam}
        `
        document.getElementById('teamName15').innerHTML = `
            ${teams[14].strTeam}
        `
        document.getElementById('teamName16').innerHTML = `
            ${teams[15].strTeam}
        `
        document.getElementById('teamName17').innerHTML = `
            ${teams[16].strTeam}
        `
        document.getElementById('teamName18').innerHTML = `
            ${teams[17].strTeam}
        `
        document.getElementById('teamName19').innerHTML = `
            ${teams[18].strTeam}
        `
        document.getElementById('teamName20').innerHTML = `
            ${teams[19].strTeam}
        `
        document.getElementById('teamName21').innerHTML = `
            ${teams[20].strTeam}
        `
        document.getElementById('teamName22').innerHTML = `
            ${teams[21].strTeam}
        `
        document.getElementById('teamName23').innerHTML = `
            ${teams[22].strTeam}
        `
        document.getElementById('teamName24').innerHTML = `
            ${teams[23].strTeam}
        `
        document.getElementById('teamName25').innerHTML = `
            ${teams[24].strTeam}
        `
        document.getElementById('teamName26').innerHTML = `
            ${teams[25].strTeam}
        `
        document.getElementById('teamName27').innerHTML = `
            ${teams[26].strTeam}
        `
        document.getElementById('teamName28').innerHTML = `
            ${teams[27].strTeam}
        `
        document.getElementById('teamName29').innerHTML = `
            ${teams[28].strTeam}
        `
        document.getElementById('teamName30').innerHTML = `
            ${teams[29].strTeam}
        `
    })