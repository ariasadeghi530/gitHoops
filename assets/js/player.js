fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=los%20angeles%20lakers')
    .then(r => r.json())
    .then(({player}) => {
        console.log(player)
        
    })



//     fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + str)
//     .then(r => r.json())
//     .then(({ teams }) => {
//       console.log(teams[0])
//       document.getElementById('teamPhoto').innerHTML = `
//             <img src="${teams[0].strTeamBadge}">
//         `
//       document.getElementById('teamName').innerHTML = `
//             ${teams[0].strTeam}
//         `
//       document.getElementById('sport').innerHTML = `
//         <strong>Sport: </strong>${teams[0].strSport}
//         `
//       document.getElementById('league').innerHTML = `
//         <strong>League: </strong>${teams[0].strLeague}
//         `
//       document.getElementById('website').innerHTML = `
//         <strong>Website: </strong><a target="_blank" href="https://${teams[0].strWebsite}">${teams[0].strWebsite}</a>
//         `
//       document.getElementById('stadium').innerHTML = `
//         <strong>Stadium: </strong>${teams[0].strStadium}(${teams[0].strStadiumLocation})
//         `
//       document.getElementById('bio').innerHTML = `
//         ${teams[0].strDescriptionEN}
//         `
//     })
//     .catch(e => console.error(e));
// }
