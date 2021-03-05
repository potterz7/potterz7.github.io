const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');
  
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');
    // use tempplate literals
        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `
        img.setAttribute('src', prophet.imageurl)
        card.append(h2);
        card.append(p);
        card.append(img);
        cards.append(card);
    });
  });
