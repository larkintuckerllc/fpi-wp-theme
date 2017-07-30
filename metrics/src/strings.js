// eslint-disable-next-line
export const ACTION_PREFIX = 'app/';
export const LAYERS = [{
  id: 0,
  name: 'A',
}, {
  id: 1,
  name: 'B',
}, {
  id: 2,
  name: 'apple',
  parent: 0,
}, {
  id: 3,
  name: 'avocado',
  parent: 0,
}, {
  id: 4,
  name: 'banana',
  parent: 1,
}, {
  id: 5,
  name: 'fuji',
  parent: 2,
}];
