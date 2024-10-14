export default function sort (array, rules) {
  const arraySort = [];
  const arraySort2 = [];
  let i = 0;

  for (const key in array) {
    if (rules[i] === key) {
      arraySort.push({key: key, value: array[key]});
      i++;
    } else {
      arraySort2.push({key: key, value: array[key]});      
    }
  }

  arraySort2.sort((a, b) => {    
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });  

  return arraySort.concat(arraySort2);
}