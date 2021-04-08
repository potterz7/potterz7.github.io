const requestURL = "https://potterz7.github.io/wdd230/ChamberOfCommerce/json/pacedata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject.towns;

    let paceEvents = town[0].events;
    let ul = document.createElement('ul'); 

    paceEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("events").appendChild(ul);
});