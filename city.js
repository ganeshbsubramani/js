const endPoint = 'https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json';
const cities = [];
fetch(endPoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
console.log(cities);
