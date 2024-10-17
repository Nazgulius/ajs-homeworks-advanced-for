// TODO: write your code here
import sort from './sort';

console.log('worked');

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

console.log(sort(obj, ["name", "level"]));


const obj2 = { health: 10, attack: 80, defence: 40, level: 2, name: 'мечник'};

console.log(sort(obj2, ["name", "level"]));