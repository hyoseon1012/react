// commonJS 스펙
//var _ = require('looash');
// ES6
import _ from 'lodash';
import './style.css';
import './hello.scss';
import {area, circumference} from "./js/circle"; // named import
import cube from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');

console.log(area(5), circumference(5));
console.log(cube(3));