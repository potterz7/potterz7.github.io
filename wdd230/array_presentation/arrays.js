const array = [1, 2, 3, 4, 5, 6, 7];
let total = 0;
for (let a of array)
total += a;
document.getElementById("demo").innerHTML= total




document.getElementById("demo2").innerHTML = array.reduce((acc,cur) => acc + cur);




document.getElementById("demo3").innerHTML = array.reduce(function(acc,cur){return acc + cur});


document.getElementById("demo4").innerHTML = array.reduce(addNum, 5);
function addNum(acc, cur) {
  return acc + cur;
}


document.getElementById("demo5").innerHTML = array.map(cur => cur ** 2);





const persons = [
    {firstname : "Clark", lastname: "Kent"},
    {firstname : " Bruce", lastname: "Banner"},
    {firstname : " Jean", lastname: "Grey"}
  ];
  
  
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
    document.getElementById("demo6").innerHTML = persons.map(getFullName);


  
    const presidents = [
        { id: 1, name: 'George Washington', party: 'unafiliated'},
        { id: 2, name: 'John Adams', party: 'Federalist'},
        { id: 3, name: 'Thomas Jefferson', party: 'Democratic-Republican'},
        { id: 4, name: 'James Madison', party: 'Democratic-Republican'}
      ];

      document.getElementById("demo7").innerHTML = presidents.map(president => /*" Id: "*/ + president.id);
 
      document.getElementById("demo8").innerHTML = array.filter( a => a> 3);
      
    
   

      var personnel = [
        {
          id: 1,
          name: "Luke Skywalker",
          pilotingScore: 10,
          shootingScore: 6,
          isForceUser: true,
        },
        {
          id: 2,
          name: "Sabine Wren",
          pilotingScore: 8,
          shootingScore: 10,
          isForceUser: false,
        },
        {
          id: 3,
          name: "Zeb Orellios",
          pilotingScore: 2,
          shootingScore: 7,
          isForceUser: false,
        },
        {
          id: 4,
          name: "Ezra Bridger",
          pilotingScore: 4,
          shootingScore: 6,
          isForceUser: true,
        },
        {
          id: 5,
          name: "Caleb Dume",
          pilotingScore: 8,
          shootingScore: 8,
          isForceUser: true,
        },
      ];
    
      document.getElementById("demo9").innerHTML =personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
