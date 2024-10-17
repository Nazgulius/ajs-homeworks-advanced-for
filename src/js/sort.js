export default function sort (obj, array) {
  //const arraySort = [];
  //const arraySort2 = [];
  const result = [];
  const copyObj = {...obj };
/*
  for (let i = 0; i < rules.length; i++) {
    for (const key in array) {
      if (rules[i] === key) {
        arraySort.push({key: key, value: array[key]});
        i++;
      } else{      
        arraySort2.push({key: key, value: array[key]});
      }           
    }    
  }*/
  
  array.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
    delete copyObj[elem];
    });
    
    const temp = [];
    for (const key in copyObj) {
    temp.push({ key, value: copyObj[key] });
    }

    temp.sort((a, b) => {
      if (a.key < b.key) return -1;
      if (a.key > b.key) return 1;
      });
      
      const arrKeys = Object.keys(copyObj).sort();
      arrKeys.forEach((elem) => {
      result.push({ key: elem, value: copyObj[elem] });
      });
/*
  arraySort2.sort((a, b) => {    
    if (a.key < b.key) {
      return -1
    } else if (a.key > b.key) {
      return 1;
    }
  });  

  for (const key in arraySort) {
    console.log('1 array: ' + arraySort[key].key + ' - ' + arraySort[key].value);
  }*/

  //return arraySort.concat(arraySort2);
  return result;
}