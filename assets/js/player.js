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
        document.getElementById('playerName').innerHTML = `
            <h2>${player[0].strPlayer}<h2>
        `
        document.getElementById('bio').innerHTML = `
            ${player[0].strDescriptionEN}
        `
    })
    .catch(e => console.error(e));