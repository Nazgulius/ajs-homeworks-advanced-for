export default function sort(obj, array) {
  const result = [];
  const copyObj = { ...obj };

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
  });

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}