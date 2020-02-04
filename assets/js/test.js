let strFirst = ''
let strLast = ''

fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + strFirst + '%20' + strLast)
    .then(r => r.json())
    .then((data) => {
     console.log(data)
    })
    .catch(e => console.error(e));
