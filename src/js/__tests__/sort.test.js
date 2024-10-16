import sort from '../sort';

test('sort 1', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const received = sort(obj, ["name", "level"]);
  
  const expected = [{"key": "name", "value": "мечник"}, {"key": "level", "value": 2}, 
  {"key": "attack", "value": 80}, {"key": "defence", "value": 40}, 
  {"key": "health", "value": 10}];

  expect(received).toEqual(expected);
})

test('sort 2', () => {
  const obj = { defence: 40, health: 10, attack: 80, level: 2, name: 'мечник'};
  const received = sort(obj, ["name", "level"]);

  const expected = [{"key": "name", "value": "мечник"}, {"key": "level", "value": 2}, 
  {"key": "attack", "value": 80}, {"key": "defence", "value": 40}, 
  {"key": "health", "value": 10}];

  expect(received).toEqual(expected);
})