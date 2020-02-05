fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=los%20angeles%20lakers')
    .then(r => r.json())
    .then(({player}) => {
        console.log(player)
        document.getElementById('playerPhoto').innerHTML = `
            <img style="width: 254px; height: 254px;" src="${player[0].strCutout}">
        `
        document.getElementById('team').innerHTML = `
            <strong>Team: </strong>${player[0].strTeam}
        `
        document.getElementById('birthday').innerHTML = `
            <strong>Birthday: </strong>${player[0].dateBorn}
        `
        document.getElementById('hometown').innerHTML = `
            <strong>Hometown: </strong>${player[0].strBirthLocation}
        `
        document.getElementById('height').innerHTML = `
            <strong>Height: </strong>${player[0].strHeight}
        `
        document.getElementById('weight').innerHTML = `
            <strong>Weight: </strong>${player[0].strWeight}
        `
        document.getElementById('bio').innerHTML = `
            ${player[0].strDescriptionEN}
        `
    })
































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
