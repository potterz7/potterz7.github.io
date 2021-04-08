const requestURL = 'https://potterz7.github.io/wdd230/ChamberOfCommerce/json/Pacedatabusiness.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const businesses = jsonObject['business'];
    const cards = document.querySelector('.cards');
  
    businesses.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let a = document.createElement('a');
    // use tempplate literals
        h2.innerHTML = `${business.name}`;
        p.innerHTML = `Owner: ${business.owner}
         <br>Address: ${business.address}
         <br>Phone: ${business.phone}
         <br> Link:`
        a.setAttribute('href', business.link);
        card.append(h2);
        card.append(p);
        card.append(a);
        cards.append(card);
    });
  });
