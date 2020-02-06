fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387')
    .then(r => r.json())
    .then(({events}) => {
      console.log(events)
      document.getElementById('games').innerHTML = '';
      for(let i = 0; i < events.length; i++){
      let imgBanner = events[i].strThumb;

      let gameDiv = document.createElement('div');
      if(imgBanner === null){
        imgBanner = './assets/images/nbaLogo.png';
      }
      gameDiv.innerHTML = `
      <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img class="gamesCard" src="${imgBanner}">
          <span class="card-title">${events[i].dateEventLocal}</span>
          </div><!--card image-->
          <div class="card-content">
          <p>${events[i].strEventAlternate}</p>
        </div><!--card content-->

        </div><!--card-->
      </div><!--col s12 m4-->
      `
      if( i % 3 === 0){
        let row = document.createElement('div');
        row.className = 'row'
        document.getElementById('games').append(row);
      }
      document.getElementById('games').append(gameDiv);
      }

      
    })
    .catch(e => console.error(e));

// <h5>${events[0].dateEventLocal}</h5>
        // <img width="254px" src="${events[1].strThumb}">
        // <h5>${events[0].strEventAlternate}</h5>



// <div class="card-content white-text">
//           <span class="card-title">${events[i].dateEventLocal}</span>
//           <img width="254px" src="${imgBanner}">
//           <h5>${events[i].strEventAlternate}</h5>
//           </div>